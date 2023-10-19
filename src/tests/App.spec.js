import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});


test('🟣 Should show title and button collection', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Pokedex (VINCO ORBIS)' })).toBeVisible();
  await expect(page.getByText('collection')).toBeVisible();
});

test('🟣 Should show pokemon not found message', async ({ page }) => {
  const input = page.getByPlaceholder('Pokemon name');

  await input.fill('nothing');
  await input.press('Enter');

  await expect(page.getByText('Sorry, that pokemon could not be found!')).toBeVisible();
});

test('🟣 Should show pokemon details', async ({ page }) => {
  const input = page.getByPlaceholder('Pokemon name');

  // data that should be obtained from the pokemon API
  const pokemon = {
    name: 'ditto',
    height: '3',
    weight: '40',
    attack: '1',
    types: 'normal',
    abilities: 'limber'
  }

  await input.fill(pokemon.name);
  await input.press('Enter');

  await expect(page.getByText(pokemon.height)).toBeVisible();
  await expect(page.getByText(pokemon.weight)).toBeVisible();
  await expect(page.getByText(pokemon.attack)).toBeVisible();
  await expect(page.getByText(pokemon.name)).toBeVisible();
  await expect(page.getByText(pokemon.abilities)).toBeVisible();
  await expect(page.getByText(pokemon.types)).toBeVisible();
  await expect(page.getByAltText(pokemon.name)).toBeVisible()

  await checkNumberOfPokemonsInLocalStorage(page, 0);
});

test('🟣 Should add pokemon to collection and show it in the sidebar', async ({ page }) => {
  const input = page.getByPlaceholder('Pokemon name');
  await input.fill('ditto');
  await input.press('Enter');
  // add to collection
  await page.getByRole('button', { name: 'Add to collection' }).click();
  // show sidebar and collection
  await page.getByTestId('collection-drawer-btn').click();

  await expect(page.getByAltText('ditto-collection')).toBeVisible()
  await expect(page.getByRole('button', { name: 'Remove' })).toBeVisible()

  await checkNumberOfPokemonsInLocalStorage(page, 1)
});

test('🟣 Should remove pokemon from collection', async ({ page }) => {
  const input = page.getByPlaceholder('Pokemon name');
  await input.fill('ditto');
  await input.press('Enter');
  // add to collection
  await page.getByRole('button', { name: 'Add to collection' }).click();
  // show sidebar and collection
  await page.getByTestId('collection-drawer-btn').click();
  // remove pokemon from collection
  await page.getByRole('button', { name: 'Remove' }).click()

  await expect(page.getByAltText('ditto-collection')).not.toBeVisible()
  await expect(page.getByRole('button', { name: 'Remove' })).not.toBeVisible()

  await checkNumberOfPokemonsInLocalStorage(page, 0)
});

test('🟣 Should remove all pokemons from collection', async ({ page }) => {
  const input = page.getByPlaceholder('Pokemon name');
  await input.fill('ditto');
  await input.press('Enter');
  // add to collection
  await page.getByRole('button', { name: 'Add to collection' }).click();

  await input.fill('pikachu');
  await input.press('Enter');
  // add to collection
  await page.getByRole('button', { name: 'Add to collection' }).click();

  // show sidebar and collection
  await page.getByTestId('collection-drawer-btn').click();

  // verify that there are 2 pokemon in the local storage
  await checkNumberOfPokemonsInLocalStorage(page, 2)

  // delete all pokemons from collection
  await page.getByRole('button', { name: 'Clear collection' }).click();

  await expect(page.getByAltText('ditto-collection')).not.toBeVisible()
  await expect(page.getByAltText('pikachu-collection')).not.toBeVisible()
  await expect(page.getByRole('button', { name: 'Remove' })).toHaveCount(0)

  await checkNumberOfPokemonsInLocalStorage(page, 0)
});

test('🟣 Should show modal with the chart', async ({ page }) => {
  const input = page.getByPlaceholder('Pokemon name');

  // add 3 pokemons to collection
  const pokemon_names = ['slowpoke', 'poliwrath', 'blaziken']

  for (let index = 0; index < pokemon_names.length; index++) {
    await input.fill(pokemon_names[index]);
    await input.press('Enter');
    await page.getByRole('button', { name: 'Add to collection' }).click();
  }

  // reload page to remove pokemon details from screen
  await page.reload()

  // open de drawer to see collection
  await page.getByTestId('collection-drawer-btn').click();

  // open the chart modal
  await page.getByRole('button', { name: 'See chart' }).click();

  await expect(page.getByText('Types of pokémon according to the count in my collection')).toBeVisible()
  await expect(page.getByText('water')).toBeVisible()
  await expect(page.getByText('fighting')).toBeVisible()
  await expect(page.getByText('fire')).toBeVisible()
  await expect(page.getByText('psychic')).toBeVisible()
  await expect(page.getByText('1')).toHaveCount(2)
  await expect(page.getByText('2')).toHaveCount(2)

  await checkNumberOfPokemonsInLocalStorage(page, 3)
});

async function checkNumberOfPokemonsInLocalStorage(page, expected) {
  return await page.waitForFunction(e => {
    return JSON.parse(localStorage['collection-storage']).state.pokemons.length === e;
  }, expected);
}


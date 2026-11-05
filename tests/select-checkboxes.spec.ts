import {test, expect} from '@playwright/test';

const QA_PLAYGROUND_FORMS = 'https://qaplayground.com/practice/forms';

test('Se llena el select y marca Aceptar terminos', async({page}) => {
    await page.goto(QA_PLAYGROUND_FORMS);

    const countrySelect = page.locator('#country');
    await countrySelect.scrollIntoViewIfNeeded();
    await countrySelect.selectOption('CA');

    const termsCheckbox = page.locator('#terms');
    await termsCheckbox.scrollIntoViewIfNeeded();
    await termsCheckbox.check();

    await expect(countrySelect).toHaveValue('CA');
    await expect(termsCheckbox).toBeChecked();



});
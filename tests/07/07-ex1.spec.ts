import { test, expect } from "@playwright/test";
import {  LoginPage } from "../../src/pages/authentication/login.page";
import { ProductPage } from "../../src/pages/dashboard/product.page";

test('create product POM', async ({ page, context }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);

    // Login vao dashboard
    await loginPage.login();    

    //  chon menu product -> Viet o trong DashboardPage
    await productPage.navigateToMenu("Products");
    await productPage.page.waitForTimeout(5 * 1000);

    // Click button create product -> Viet o trong ProductPage
    await productPage.clickButtonCreateProduct();
    await productPage.page.waitForTimeout(5 * 1000);

    // create product
    await productPage.createProduct("iPhone 14 Pro Max 128GB - linhphan01", "100.00", "Color", ["Space black", "Silver", "Gold", "Deep Purple"]);
    await productPage.page.waitForTimeout(5 * 1000);
    console.log("create product success")

    // Verify product
    await productPage.verifyProduct(context,"iPhone 14 Pro Max 128GB - linhphan01", "100.00", "Color", ["Space black", "Silver", "Gold", "Deep Purple"])
    await productPage.page.waitForTimeout(5 * 1000);
    console.log("done test");
})


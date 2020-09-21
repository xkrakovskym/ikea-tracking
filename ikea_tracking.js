function track_homepage() {
    console.log("homepage");
}

function track_product() {
    const name = $(".range-revamp-header-section__title--big").first().text();
    const price = parseFloat($(".range-revamp-price__integer").first().text());

    console.log(name);
    console.log(price);
}

function track_shoppingbag(){

    const total_price = parseFloat($(".ordertotal__subtotal-price").first().text().replace(/[^0-9.-]+/g,""));
    //for simplicity I am just checking number of products, however I should also check quantities
    const number_of_products = $(".productlist").children("div").length;
    const avg_price = total_price/number_of_products

    console.log(number_of_products);
    console.log(avg_price);
}

function track_search(){
    //this time I use different approach but also jQuerying class="search-summary__heading" would work
    $("button[class*='add-to-cart']").on( "click", function( event ) {
        const product_name = event.currentTarget.parentElement.querySelector('[class*="title--small"]').innerText;
        console.log("added to cart " + product_name);
    });

    const url_params = new URLSearchParams(window.location.search);
    console.log(url_params.get("q"));
}

function track_added_to_cart(){
    $("button[class*='add-to-cart']").on( "click", function( event ) {
        console.log("ahoj");
    });
}
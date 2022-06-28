function list() {
    var products = JSON.parse(localStorage.getItem('products') || '[]')
    const productList = document.getElementById('card')
    products.map(product => {
        productList.innerHTML += `
    <div class="col-md-3 top_brand_left-1 " id='card'>
        <div class="hover14 column">
            <div class="agile_top_brand_left_grid">
                <div class="agile_top_brand_left_grid_pos">
                    <img src="images/offer.png" alt=" " class="img-responsive">
                </div>
                <div class="agile_top_brand_left_grid1">
                    <figure id="">
                        <div class="snipcart-item block">
                            <div class="snipcart-thumb">
                                <a href="products.html"><img alt=" " src="${product.photo}" width='100px' height='200px'></a>		
                                <p>${product.productName}</p>
                                <div class="stars">
                                    <i class="fa fa-star blue-star" aria-hidden="true"></i>
                                    <i class="fa fa-star blue-star" aria-hidden="true"></i>
                                    <i class="fa fa-star blue-star" aria-hidden="true"></i>
                                    <i class="fa fa-star blue-star" aria-hidden="true"></i>
                                    
                                </div>
                                    <h4>${product.price}</h4>
                            </div>
                            <div class="snipcart-details top_brand_home_details">
                                <form action="#" method="post">
                                    <fieldset>
                                        <input type="hidden" name="cmd" value="_cart">
                                        <input type="hidden" name="add" value="1">
                                        <input type="hidden" name="business" value=" ">
                                        <input type="hidden" name="item_name" value="Fortune Sunflower Oil">
                                        <input type="hidden" name="amount" value="35.99">
                                        <input type="hidden" name="discount_amount" value="1.00">
                                        <input type="hidden" name="currency_code" value="USD">
                                        <input type="hidden" name="return" value=" ">
                                        <input type="hidden" name="cancel_return" value=" ">
                                        <input type="submit" name="submit" value="Add to cart" class="button">
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    </div>
        `
        // console.log(product);
    })
}
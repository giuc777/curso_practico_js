const menuEmail = document.querySelector('.navbar-email');
const EmailOption = document.querySelector('.desktop-menu');
const menuHam = document.querySelector(' .menu-Ham');
const Menumobile = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart')
const productDetailClose = document.querySelector('.product-detail-close');
const shoppingCardContainer = document.querySelector('#shoppingCardContainer')
const cardsContainer = document.querySelector('.cards-container')
const productDatailContainer = document.querySelector('#productoDetail');


menuEmail.addEventListener('click', toggleDesktotop);
menuHam.addEventListener('click', toggleMobile);
menuCarrito.addEventListener('click', toggleCarritoAside);
productDetailClose.addEventListener('click', closeProductDetail);




function toggleDesktotop(){
    const isAsideClosed = shoppingCardContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCardContainer.classList.add('inactive');
    }
    EmailOption.classList.toggle('inactive');

    const isproductDetailClose = productDatailContainer.classList.contains('inactive');

    if (!isproductDetailClose){
        productDatailContainer.classList.add('inactive');
    }
}

function toggleMobile(){

    const isAsideClosed = shoppingCardContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCardContainer.classList.add('inactive');
    }
    closeProductDetail();

    Menumobile.classList.toggle('inactive');
    
}

function toggleCarritoAside(){
    const isMobileMenuClosed = Menumobile.classList.contains('inactive');

    if (!isMobileMenuClosed){
        Menumobile.classList.add('inactive');
    }
    
    const isproductDetailClose = productDatailContainer.classList.contains('inactive');

    if (!isproductDetailClose){
        productDatailContainer.classList.add('inactive');
    }
    
    
    shoppingCardContainer.classList.toggle('inactive');
} 




function opneProductDateilAside(){
    shoppingCardContainer.classList.add('inactive');
    productDatailContainer.classList.remove('inactive');
    EmailOption.classList.add('inactive');
}


function closeProductDetail(){
    productDatailContainer.classList.add('inactive')
}


const product_list =[];
product_list.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

product_list.push({
    name: 'Pantalla',
    price: 340,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

product_list.push({
    name: 'Computer',
    price: 1122,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

product_list.push({
    name: 'Table',
    price: 10,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
product_list.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

product_list.push({
    name: 'Pantalla',
    price: 340,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

product_list.push({
    name: 'Computer',
    price: 1122,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

product_list.push({
    name: 'Table',
    price: 10,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function renderProduct(arr) {
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const ProductImg = document.createElement('img');
        ProductImg.setAttribute('src', product.image);
        ProductImg.addEventListener('click', opneProductDateilAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const producInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
    
        producInfoDiv.append(productPrice, productName);
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.append(producInfoDiv, productInfoFigure);
        productCard.append(ProductImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProduct(product_list);
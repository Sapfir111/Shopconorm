import { adjustMessageWidth } from "../shared/message-width.js";
import { products, loadFromStorage, saveToStorage } from "../data/products.js";
import { increaseQuantity, decreaseQuantity, quantity } from "../shared/quantity-buttons.js";
import { addToCart, updateCartQuantity } from "../cart/cart.js";

adjustMessageWidth();

export const detailsCart = [];

loadFromStorage('product', detailsCart);

export function renderDetails() {

    if (detailsCart.length > 0) {

        let productDetailsHTML = '';

        detailsCart.forEach((detailsProduct) => {
            let matchingProduct;
            let detailsProductId = detailsProduct.productId;

            products.forEach((product) => {
                if (product.id === detailsProductId) {
                    matchingProduct = product;

                    productDetailsHTML += `
                        <div class="overview__body container mobile-container">
                            <div class="overview__images-wrapper js-images-wrapper">
                                <div class="overview__images-wrapper-column-two">
                                    <div>
                                        <img src="${matchingProduct.image}" alt="product image">
                                    </div>
                                </div>
                            </div>
                            <div class="overview__description js-description">
                                <div class="overview__title">
                                    <h1>${matchingProduct.name}</h1>
                                </div>
                                <div class="overview__rating-wrapper">
                                    <img src="${matchingProduct.rating.starsImage}" alt="">
                                    <p>${matchingProduct.rating.starsQuantity}/<span>5</span></p>
                                </div>
                                <div class="overview__price-wrapper">
                                    <p class="overview__price">$${matchingProduct.price / 100}</p>
                                    ${
                                        matchingProduct.previousPrice > 0 ? `<p class="overview__previous-price">$${matchingProduct.previousPrice / 100}</p>` : ''
                                    }
                                    ${
                                        matchingProduct.previousPrice > 0 ? `<p class="overview__discount">-${matchingProduct.discount}%</p>` : ''
                                    }
                                </div>
                                <div class="overview__slogan">
                                    <p>${matchingProduct.description}</p>
                                </div>
                                <div class="overview__color-wrapper">
                                    <p>Select colors</p>
                                    <ul class="overview__color-list js-color-list">
                                        <li class="js-product-color overview__color-item overview__color-item-dark-olive"
                                        data-product-color-id="dark-olive">
                                            <img 
                                            class="js-color-tick overview__color-picked overview__color-tick" 
                                            src="images/icons/pick-color-tick.svg" 
                                            alt=""
                                            data-product-color-tick-id="dark-olive"
                                            >
                                        </li>
                                        <li class="js-product-color overview__color-item overview__color-item-deep-green"
                                        data-product-color-id="deep-green">
                                            <img 
                                            class="js-color-tick overview__color-picked overview__color-tick" 
                                            src="images/icons/pick-color-tick.svg" 
                                            alt=""
                                            data-product-color-tick-id="deep-green"
                                            >
                                        </li>
                                        <li class="js-product-color overview__color-item overview__color-item-deep-blue"
                                        data-product-color-id="deep-blue">
                                            <img 
                                            class="js-color-tick overview__color-picked overview__color-tick" 
                                            src="images/icons/pick-color-tick.svg" 
                                            alt=""
                                            data-product-color-tick-id="deep-blue"
                                            >
                                        </li>
                                        <p class="overview__choose-message js-choose-color-message overview__choose-message-color-display-none">The choice of color is not optional</p>
                                    </ul>
                                </div>
                                <div class="overview__size-wrapper">
                                    <p>Choose Size</p>
                                    <ul class="overview__size-list">
                                        <li class="js-size-item overview__size-item" data-product-size-id="small">
                                            <p>Small</p>
                                        </li>
                                        <li class="js-size-item overview__size-item" data-product-size-id="medium">
                                            <p>Medium</p>
                                        </li>
                                        <li class="js-size-item overview__size-item" data-product-size-id="large">
                                            <p>Large</p>
                                        </li>
                                        <li class="js-size-item overview__size-item" data-product-size-id="x-large">
                                            <p>X-Large</p>
                                        </li>
                                        <p class="overview__choose-message js-choose-size-message overview__choose-message-size-display-none">The choice of size is not optional</p>
                                    </ul>
                                </div>
                                <div class="overview__buttons-wrapper">
                                    <div class="overview__quantity-button-wrapper">
                                        <button class="decrease-quantity-button">
                                            <img src="images/icons/minus.svg" alt="">
                                        </button>
                                        <p class="quantity">${quantity}</p>
                                        <button class="increase-quantity-button">
                                            <img src="images/icons/plus.svg" alt="">
                                        </button>
                                    </div>
                                    <button class="js-add-to-cart-button overview__add-to-cart-button">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    `;
                }
            });
        });

        const container = document.querySelector('.js-overview');

        if (container) {
            container.innerHTML = productDetailsHTML;
            attachQuantityDisplay();
            handleProductColor();
            handleProductSize();
        } else {
            console.error('Container is not found.')
        }

    } else {
        console.error('Product details cart is empty.')
    }
}

function renderRecommendations() {
    let alsoLikeHTML = '';

    products.forEach((product) => {
        if (product.generationId === '3') {
            alsoLikeHTML += `
                <a href="product-detail.html">
                    <li class="catalog__item js-product" data-product-id="${product.id}">
                        <img class="catalog__product-image" src="${product.image}" alt="product">
                        <div class="catalog__product-description">
                            <p class="catalog__product-name">${product.name}</p>
                            <div class="catalog__product-rating-wrapper">
                                <img src="${product.rating.starsImage}" alt="rating">
                                <p>${product.rating.starsQuantity}/<span>5</span></p>
                            </div>
                            <div class="catalog__product-price-wrapper">
                                <p class="catalog__product-price">$${product.price / 100}</p>
                                ${
                                    product.discount > 0 ? `<p class="catalog__product-previous-price">$${product.previousPrice / 100}</p>` : ''
                                }
                                                ${
                                    product.discount > 0 ? `<p class="catalog__product-discount js-discount">-${product.discount}%</p>` : ''
                                }
                            </div>
                        </div>
                    </li>
                </a>
            `;
        }
    });

    const container = document.querySelector('.js-catalog-list');

    if (container) {
        container.innerHTML = alsoLikeHTML;
    } else {
        console.error('Container is not found.')
    }

    const product = document.querySelectorAll('.js-product');

    product.forEach((product) => {
        product.addEventListener('click', () => {
            const productId = product.dataset.productId;

            detailsCart.length = 0;

            detailsCart.push(
                {productId}
            );

            saveToStorage('product', detailsCart);
        })
    });
}

renderRecommendations();

export function attachQuantityDisplay() {
    const decreaseButton = document.querySelector('.decrease-quantity-button');
    const increaseButton = document.querySelector('.increase-quantity-button');
    const quantityDisplay = document.querySelector('.quantity');

    if (decreaseButton && increaseButton && quantityDisplay) {
        decreaseButton.addEventListener('click', () => decreaseQuantity(quantityDisplay),);
        increaseButton.addEventListener('click', () => increaseQuantity(quantityDisplay));
    } else {
        console.error('Quantity buttons or display not found.');
    }
}

export function uniqueId(detail) {
    let editedId = '';
    let productId = '';

    detailsCart.forEach((product) => {
        productId = product.productId;
    });

    editedId = productId + '-' + detail;
    console.log(editedId);

    return editedId;
}

function handleProductColor() {
    const colorTick = document.querySelectorAll('.js-color-tick');
    const productColor = document.querySelectorAll('.js-product-color');

    productColor
        .forEach((color) => {
            const colorId = color.dataset.productColorId;

            color.addEventListener('click', () => {
                colorTick.forEach((tick) => {
                    tick.classList.add('overview__color-picked');
                });

                const tick = Array.from(colorTick).find(tick => tick.dataset.productColorTickId === colorId);
                if (tick) {
                    tick.classList.remove('overview__color-picked');
                }

                detailsCart.forEach((product) => {
                    product.color = colorId;
                    uniqueId(colorId);
                });

                saveToStorage('product', detailsCart);
            });
        });
}

function handleProductSize() {
    const productSize = document.querySelectorAll('.js-size-item');

    productSize.forEach((size) => {
        const sizeId = size.dataset.productSizeId;

        size.addEventListener('click', () => {

            productSize.forEach((size) => {
                size.classList.remove('overview__size-picked');
            });

            size.classList.add('overview__size-picked');

            detailsCart.forEach((product) => {
                product.size = sizeId;
                uniqueId(sizeId);
            });

            saveToStorage('product', detailsCart);
        });
    });
}

function reportReview() {
    const reportButton = document.querySelectorAll('.js-report-button');
    const meatballsMenuButton = document.querySelectorAll('.js-meatballs-menu-button');
    // let reportButtonId = '';
    // let meatballsMenuButtonId = '';
    // let reportContainerId = '';

    // я тут спробую зробити не наложені цикли,
    // а кожен окремо + можемо мати доступ до reportButtonId
    // без повторного його зберігання у змінній

    // reportButton.forEach((reportButton) => {
    //     const reportButtonId = reportButton.dataset.reportButtonId;
    //
    //     meatballsMenuButton.forEach((meatballsButton) => {
    //         const meatballsMenuButtonId = meatballsButton.dataset.meatballsMenuButtonId;
    //
    //         meatballsButton.addEventListener('click', () => {
    //             reportButtonContainer.forEach((container) => {
    //                 if (reportButtonId === meatballsMenuButtonId) {
    //                     container.classList.remove('details-review__report-container-display-none')
    //                 }
    //             });
    //         });
    //     });
    // });

    meatballsMenuButton.forEach((meatballsButton) => {
        const meatballsMenuButtonId = meatballsButton.dataset.meatballsMenuButtonId;

        meatballsButton.addEventListener('click', () => {
            reportButton.forEach((button) => {
                const reportButtonId = button.dataset.reportButtonId;

                if (reportButtonId === meatballsMenuButtonId) {
                    button.classList.remove('details-review__report-button-display-none');
                }
            });
        });
    });

    reportButton.forEach((button) => {
        const reportButtonId = button.dataset.reportButtonId;

        button.addEventListener('click', () => {
            products.forEach((product) => {
                detailsCart.forEach((detailsItem) => {
                    if (product.id === detailsItem.productId) {
                        detailsItem = product;

                        detailsItem.userReviews.forEach((review) => {
                            if (reportButtonId === review.reviewId) {
                                alert(`Reported the review of ${review.username}!`);

                                button.classList.add('details-review__report-button-display-none');
                            }
                        });
                    }
                });
            });
        });
    });
}

function reviewCountFunc() {
    let reviewCount = 0;

    products.forEach((product) => {
        detailsCart.forEach((detailsItem) => {
            if (product.id === detailsItem.productId) {
                detailsItem = product;

                detailsItem.userReviews.forEach(() => {
                    reviewCount++;
                });
            }
        });
    });

    return reviewCount;
}

/*
function shortText() {
    products.forEach((product) => {
        detailsCart.forEach((detailsItem) => {
            if (product.id === detailsItem.productId) {
                detailsItem = product;

                detailsItem.userReviews.forEach((review) => {

                    if (review.userText.length > 197) {
                        review.userText = review.userText.slice(0, 197) + '...';
                    }
                });
            }
        });
    });
}
*/

/*
function loadMoreReviews() {
    const hiddenReviews = document.querySelector('.js-hidden-reviews');
    const loadReviewsButton = document.querySelector('.js-review-button');

    loadReviewsButton.addEventListener('click', () => {
        loadReviewsButton.classList.toggle('is-clicked');

        if (loadReviewsButton.classList.contains('is-clicked')) {
            loadReviewsButton.innerText = 'Load Less Reviews';
        } else {
            loadReviewsButton.innerText = 'Load More Reviews';
        }

        hiddenReviews.classList.toggle('details-review__content-display-none');
    });
}
*/

function renderTabs() {
    let productDetailsHTML = '';
    let reviewsHTML = '';
    let FAQsHTML = '';

    const productDetailsTab = document.querySelector('.js-product-details-tab');
    const reviewsTab = document.querySelector('.js-reviews-tab');
    const FAQsTab = document.querySelector('.js-FAQs-tab');
    const tabs = document.querySelectorAll('.js-tab');
    const reviewContainer = document.querySelector('.js-review-container');
    const reviewCount = reviewCountFunc();

    products.forEach((product) => {
        detailsCart.forEach((detailsItem) => {
            if (product.id === detailsItem.productId) {
                detailsItem = product;

                productDetailsHTML += `
                    <div>
                        <h1>${detailsItem.name} details:</h1>
                        <div>
                            <h3>Description:</h3>
                            <p>${detailsItem.description}</p>
                        </div>
                        <div>
                            <h3>Key Features:</h3>
                            <ul class="js-key-features-list"></ul>
                        </div>
                        <div>
                            <h3>Material & Care:</h3>
                            <p>Fabric: ${detailsItem.details.materialAndCare.material}</p>
                            <p>Care: ${detailsItem.details.materialAndCare.care}</p>
                        </div>
                        <div>
                            <h3>Sizing:</h3>
                            <p>Sizing: ${detailsItem.details.sizing}</p>
                        </div>
                        <div>
                            <h3>Shipping & Returns:</h3>
                             <p>Shipping: ${detailsItem.details.shippingAndReturns.shipping}</p> 
                            <p>Returns: ${detailsItem.details.shippingAndReturns.returns}</p>
                        </div>
                    </div>
                `;

                reviewsHTML += `
                    <div class="details-review__nav">
                        <p class="details-review__nav-title">All Reviews <span class="details-review__nav-quantity">(${reviewCount})</span></p>
                        <div class="details-review__nav-buttons-wrapper">
                            <button class="details-review__nav-button">
                                <img src="images/icons/filters-black.svg" alt="">
                            </button>
                            <button class="details-review__nav-button hidden-tablet">
                                Latest
                                <img src="images/icons/see-more-black.svg" alt="">
                            </button>
                            <button class="details-review__nav-button">
                                Write a Review
                            </button>
                        </div>
                    </div>
                    <div class="details-review__content js-reviews-container">
                        <div class="details-review__column">
                            <ul class="details-review__list js-reviews-list" data-review-list-gen-id="1"></ul>
                        </div>
                        <div class="details-review__column">
                            <ul class="details-review__list js-reviews-list" data-review-list-gen-id="2"></ul>
                        </div>
                    </div>
                `;

                FAQsHTML += `
                    <div>
                        <h1>Frequently Asked Questions (FAQs) – Clothing Store</h1>
                        <div>
                            <h2>1. What are your store hours?</h2>
                            <p>Our store is open from Monday to Saturday, 9:00 AM – 8:00 PM, and Sunday, 10:00 AM – 6:00 PM.</p>
                        </div>                        
                        <div>
                            <h2>2. Do you offer international shipping?</h2>
                            <p>Yes! We ship worldwide. Shipping costs and delivery times vary based on your location. You can check the shipping rates at checkout.</p>
                        </div>                        
                        <div>
                            <h2>3. What payment methods do you accept?</h2>
                            <p>We accept Visa, MasterCard, PayPal, Apple Pay and Google Pay.</p>
                        </div>                        
                        <div>
                            <h2>4. Can I return or exchange an item?</h2>
                            <p>Yes! We accept returns and exchanges within 30 days of purchase. Items must be unworn, unwashed, and with tags attached.</p>
                        </div>                        
                        <div>
                            <h2>5. How do I track my order?</h2>
                            <p>Once your order is shipped, you will receive a tracking number via email. You can track your package on our website or through the carrier’s website.</p>
                        </div>                        
                        <div>
                            <h2>6. What if I received a damaged or incorrect item?</h2>
                            <p>We’re sorry for the inconvenience! Please contact our customer support at <a href="mailto:support@yourstore.com">support@yourstore.com</a> within 7 days of receiving your order, and we’ll assist you.</p>
                        </div>                        
                        <div>
                            <h2>7. Do you offer gift cards?</h2>
                            <p>Yes! We offer digital gift cards in various amounts. They can be purchased on our website and used for online and in-store purchases.</p>
                        </div>                                   
                        <div>
                            <h2>8. How can I contact customer service?</h2>
                            <p>You can reach us via:</p>
                            <p>Email: <a href="mailto:support@yourstore.com">support@yourstore.com</a></p>
                            <p>Phone: <a href="tel:+15551234567"></a>+1 (555) 123-4567</p>
                            <p>Live Chat: Available on our website</p>
                        </div>
                    </div>
                `;

                reviewContainer.innerHTML = reviewsHTML;
                reviewsTab.classList.add('tabs__tab-active');
                renderReviews();

                function switchTab(tabElement, content) {
                    tabs.forEach((tab) => {
                        tab.classList.remove('tabs__tab-active')
                    });
                    tabElement.classList.add('tabs__tab-active');
                    reviewContainer.innerHTML = content;
                }

                // renderReviews, в ідеалі, як мені здається, має бути
                // не внутрішньою функцією всередині renderTabs
                // вона має усе для незалежного існування, цикли і так далі
                // єдине, що потрібно виправити це залежність від reviewCount

                function renderReviews() {
                    const reviewsList = document.querySelectorAll('.js-reviews-list');

                    reviewsList.forEach((list) => {
                        const listId = list.dataset.reviewListGenId;
                        let userReviewsHTML = '';

                        if (reviewsList) {
                            products.forEach((product) => {
                                detailsCart.forEach((detailsItem) => {
                                    if (product.id === detailsItem.productId) {
                                        detailsItem = product;

                                        detailsItem.userReviews.forEach((review) => {
                                            if (review.generationId === listId) {
                                                userReviewsHTML += `
                                                    <li class="details-review__item" data-review-item-id="${review.generationId}">
                                                        <div class="details-review__item-description">
                                                            <div class="details-review__item-description-row">
                                                                <div class="details-review__item-rating-wrapper">
                                                                    <img src="${review.reviewRatingImage}" alt="">
                                                                    <img class="details-review__meatballs-menu-icon js-meatballs-menu-button" src="images/icons/meatballs-menu.svg" alt=""
                                                                      data-meatballs-menu-button-id="${review.reviewId}">
                                                                     <!--
                                                                         <div class="details-review__report-container details-review__report-container-display-none js-report-button-container"
                                                                           data-report-container-id="${review.reviewId}">
                                                                            <div class="details-review__report-button-container">
                                                                                <button class="details-review__report-button js-report-button" data-report-button-id="${review.reviewId}">
                                                                                <img src="images/icons/report.svg" alt="">
                                                                                Report
                                                                                </button>
                                                                            </div>
                                                                         </div>
                                                                     -->
                                                                     <button class="details-review__report-button details-review__report-button-display-none js-report-button" data-report-button-id="${review.reviewId}">
                                                                        <img src="images/icons/report.svg" alt="">
                                                                        Report
                                                                     </button>
                                                                </div>
                                                                <div class="details-review__item-name-wrapper">
                                                                    <p>${review.username}</p>
                                                                    <img src="images/icons/tick-green.svg" alt="">
                                                                </div>
                                                                <div class="details-review__item-comment">
                                                                    <p class="js-user-text">"${review.userText}"</p>
                                                                </div>
                                                            </div>
                                                            <div class="details-review__item-post-date">
                                                                <p>Posted on ${review.postDate}</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                `;
                                            }

                                            if (review.userText.length > 197) {
                                                review.userText = review.userText.slice(0, 197) + '...';
                                            }
                                        });
                                    }
                                });
                            });
                        }

                        list.innerHTML = userReviewsHTML;
                    });
                }

                productDetailsTab.addEventListener('click', () => {
                    switchTab(productDetailsTab, productDetailsHTML);

                    const keyFeaturesList = document.querySelector('.js-key-features-list');

                    if (keyFeaturesList) {
                        let keyFeaturesHTML = '';

                        products.forEach((product) => {
                            detailsCart.forEach((detailsItem) => {
                                if (product.id === detailsItem.productId) {
                                    detailsItem = product;

                                    detailsItem.details.keyFeatures.forEach((feature) => {
                                        keyFeaturesHTML += `<li>- ${feature}</li>`;
                                    });
                                }
                            });
                        });

                        keyFeaturesList.innerHTML = keyFeaturesHTML;
                    }
                });

                reviewsTab.addEventListener('click', () => {
                    switchTab(reviewsTab, reviewsHTML);
                    renderReviews();
                });

                FAQsTab.addEventListener('click', () => switchTab(FAQsTab, FAQsHTML));
            }
        });
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const addToCartButton = document.querySelector('.js-add-to-cart-button');

    if (addToCartButton) {
        addToCartButton.addEventListener('click', addToCart);
    }

    updateCartQuantity();
});

window.addEventListener('DOMContentLoaded', () => {
    updateCartQuantity();
    // loadMoreReviews();
    renderTabs();
    reportReview();
    reviewCountFunc();
});

renderDetails();
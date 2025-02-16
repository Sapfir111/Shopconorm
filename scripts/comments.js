// productColor
//     .forEach((color) => {
//         const colorId = color.dataset.productColorId;
//
//         colorTick.forEach((tick) => {
//             const tickId = tick.dataset.productColorTickId;
//
//             if (colorId === tickId) {
//                 color.addEventListener('click', () => {
//
//                     tick.classList.toggle('overview__color-picked');
//
//                     detailsCart.forEach((product) => {
//                         product.color = colorId;
//
//                         saveToStorage('product', detailsCart);
//                     });
//                 });
//             }
//         });
//     });

// import {products} from "./data/products";
// import {detailsCart} from "./product-details/product-details";
//
// function renderTabs() {
//     let productDetailsHTML = '';
//     let reviewsHTML = '';
//     let FAQsHTML = '';
//
//     const productDetailsTab = document.querySelector('.js-product-details-tab');
//     const reviewsTab = document.querySelector('.js-reviews-tab');
//     const FAQsTab = document.querySelector('.js-FAQs-tab');
//     const reviewContainer = document.querySelector('.js-review-container');
//
//     products.forEach((product) => {
//         detailsCart.forEach((detailsItem) => {
//             if (product.id === detailsItem.productId) {
//                 detailsItem = product;
//
//                 productDetailsHTML += `
//                     <p>Details</p>
//                 `;
//
//                 reviewsHTML += `
//                     <div class="details-review__nav">
//                         <p class="details-review__nav-title">All Reviews <span class="details-review__nav-quantity">(451)</span></p>
//                         <div class="details-review__nav-buttons-wrapper">
//                             <button class="details-review__nav-button">
//                                 <img src="images/icons/filters-black.svg" alt="">
//                             </button>
//                             <button class="details-review__nav-button hidden-tablet">
//                                 Latest
//                                 <img src="images/icons/see-more-black.svg" alt="">
//                             </button>
//                             <button class="details-review__nav-button">
//                                 Write a Review
//                             </button>
//                         </div>
//                     </div>
//                     <div class="details-review__content js-reviews-container">
//                         <div class="details-review__column">
//                             <ul class="details-review__list">
//                                 <li class="details-review__item">
//                                     <div class="details-review__item-description">
//                                         <div class="details-review__item-description-row">
//                                             <div class="details-review__item-rating-wrapper">
//                                                 <img src="images/icons/stars/4.5.svg" alt="">
//                                                 <img class="details-review__meatballs-menu-icon" src="images/icons/meatballs-menu.svg" alt="">
//                                             </div>
//                                             <div class="details-review__item-name-wrapper">
//                                                 <p>Samantha D.</p>
//                                                 <img src="images/icons/tick-green.svg" alt="">
//                                             </div>
//                                             <div class="details-review__item-comment">
//                                                 <p>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
//                                             </div>
//                                         </div>
//                                         <div class="details-review__item-post-date">
//                                             <p>Posted on August 14, 2023</p>
//                                         </div>
//                                     </div>
//                                 </li>
//                                 <li class="details-review__item">
//                                     <div class="details-review__item-description">
//                                         <div class="details-review__item-description-row">
//                                             <div class="details-review__item-rating-wrapper">
//                                                 <img src="images/icons/stars/4.5.svg" alt="">
//                                                 <img class="details-review__meatballs-menu-icon" src="images/icons/meatballs-menu.svg" alt="">
//                                             </div>
//                                             <div class="details-review__item-name-wrapper">
//                                                 <p>Ethan R.</p>
//                                                 <img src="images/icons/tick-green.svg" alt="">
//                                             </div>
//                                             <div class="details-review__item-comment">
//                                                 <p>"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."</p>
//                                             </div>
//                                         </div>
//                                         <div class="details-review__item-post-date">
//                                             <p>Posted on August 16, 2023</p>
//                                         </div>
//                                     </div>
//                                 </li>
//                                 <li class="details-review__item">
//                                     <div class="details-review__item-description">
//                                         <div class="details-review__item-description-row">
//                                             <div class="details-review__item-rating-wrapper">
//                                                 <img src="images/icons/stars/4.5.svg" alt="">
//                                                 <img class="details-review__meatballs-menu-icon" src="images/icons/meatballs-menu.svg" alt="">
//                                             </div>
//                                             <div class="details-review__item-name-wrapper">
//                                                 <p>Liam K.</p>
//                                                 <img src="images/icons/tick-green.svg" alt="">
//                                             </div>
//                                             <div class="details-review__item-comment">
//                                                 <p>"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's..."</p>
//                                             </div>
//                                         </div>
//                                         <div class="details-review__item-post-date">
//                                             <p>Posted on August 18, 2023</p>
//                                         </div>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div class="details-review__column">
//                             <ul class="details-review__list">
//                                 <li class="details-review__item">
//                                     <div class="details-review__item-description">
//                                         <div class="details-review__item-description-row">
//                                             <div class="details-review__item-rating-wrapper">
//                                                 <img src="images/icons/stars/4.5.svg" alt="">
//                                                 <img class="details-review__meatballs-menu-icon" src="images/icons/meatballs-menu.svg" alt="">
//                                             </div>
//                                             <div class="details-review__item-name-wrapper">
//                                                 <p>Alex M.</p>
//                                                 <img src="images/icons/tick-green.svg" alt="">
//                                             </div>
//                                             <div class="details-review__item-comment">
//                                                 <p>"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
//                                             </div>
//                                         </div>
//                                         <div class="details-review__item-post-date">
//                                             <p>Posted on August 15, 2023</p>
//                                         </div>
//                                     </div>
//                                 </li>
//                                 <li class="details-review__item">
//                                     <div class="details-review__item-description">
//                                         <div class="details-review__item-description-row">
//                                             <div class="details-review__item-rating-wrapper">
//                                                 <img src="images/icons/stars/4.5.svg" alt="">
//                                                 <img class="details-review__meatballs-menu-icon" src="images/icons/meatballs-menu.svg" alt="">
//                                             </div>
//                                             <div class="details-review__item-name-wrapper">
//                                                 <p>Olivia P.</p>
//                                                 <img src="images/icons/tick-green.svg" alt="">
//                                             </div>
//                                             <div class="details-review__item-comment">
//                                                 <p>"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</p>
//                                             </div>
//                                         </div>
//                                         <div class="details-review__item-post-date">
//                                             <p>Posted on August 17, 2023</p>
//                                         </div>
//                                     </div>
//                                 </li>
//                                 <li class="details-review__item">
//                                     <div class="details-review__item-description">
//                                         <div class="details-review__item-description-row">
//                                             <div class="details-review__item-rating-wrapper">
//                                                 <img src="images/icons/stars/4.5.svg" alt="">
//                                                 <img class="details-review__meatballs-menu-icon" src="images/icons/meatballs-menu.svg" alt="">
//                                             </div>
//                                             <div class="details-review__item-name-wrapper">
//                                                 <p>Ava H.</p>
//                                                 <img src="images/icons/tick-green.svg" alt="">
//                                             </div>
//                                             <div class="details-review__item-comment">
//                                                 <p>"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."</p>
//                                             </div>
//                                         </div>
//                                         <div class="details-review__item-post-date">
//                                             <p>Posted on August 19, 2023</p>
//                                         </div>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 `;
//
//                 FAQsHTML += `
//                     <p>FAQS</p>
//                 `;
//
//                 productDetailsTab.addEventListener('click', () => {
//                     reviewContainer.innerHTML = productDetailsHTML;
//                     productDetailsTab.classList.add('tabs__tab-active');
//                     renderTabs();
//                 });
//
//                 reviewsTab.addEventListener('click', () => {
//                     reviewContainer.innerHTML = reviewsHTML;
//                     reviewsTab.classList.add('tabs__tab-active');
//                     renderTabs();
//                 });
//
//                 FAQsTab.addEventListener('click', () => {
//                     reviewContainer.innerHTML = FAQsHTML;
//                     FAQsTab.classList.add('tabs__tab-active');
//                     renderTabs();
//                 });
//             }
//         });
//     });
// }
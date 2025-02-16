export function saveToStorage(key, data) {
    localStorage.setItem(`${key}`, JSON.stringify(data));
}

export function loadFromStorage(key, arrayName) {
    const savedData = JSON.parse(localStorage.getItem(`${key}`));

    if (savedData && Array.isArray(savedData)) {
        arrayName.push(...savedData);
    } else {
        console.error('No valid data found in localStorage.');
    }
}

export const products = [
    {
        id: 'c50c3520-d1bc-4d44-963d-fcb9d0bcd9a6',
        generationId: '1',
        image: 'images/products/new-arrivals/1.svg',
        name: 'T-Shirt With Tape Details',
        rating: {
            starsImage: 'images/icons/stars/4.5.svg',
            starsQuantity: '4.5'
        },
        price: 12000,
        description: 'A stylish T-shirt featuring unique tape details, perfect for casual wear and modern street fashion.',
        details: {
            keyFeatures: [
                'Soft and breathable fabric',
                'Unique tape details for a trendy look',
                'Regular fit for all-day comfort',
                'Crew neck design',
                'Available in multiple colors'
            ],
            materialAndCare: {
                material: '100% Cotton',
                care: 'Machine wash cold, do not bleach, tumble dry low, iron on low heat'
            },
            sizing: 'True to size',
            shippingAndReturns: {
                shipping: 'Free shipping on orders over $50',
                returns: '30-day return policy'
            }
        },
        userReviews: [
            {
                reviewId: '1',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Samantha D.',
                userText: 'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt.',
                postDate: 'August 14, 2023'
            },
            {
                reviewId: '2',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Ethan R.',
                userText: 'This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer\'s touch in every aspect of this shirt.',
                postDate: 'August 16, 2023'
            },
            {
                reviewId: '3',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Liam K.',
                userText: 'This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer\'s...',
                postDate: 'August 18, 2023'
            },
            {
                reviewId: '4',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Ethan W.',
                userText: 'This T-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer\'s attention to detail. It fits perfectly and works well with both jeans and joggers.',
                postDate: 'October 12, 2023'
            },
            {
                reviewId: '5',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.svg',
                username: 'Olivia S.',
                userText: 'Love the modern streetwear vibe of this T-shirt! The tape details make it stand out. The material is breathable, though I wish it was slightly thicker for a more premium feel.',
                postDate: 'September 5, 2023'
            },
            {
                reviewId: '6',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/5.svg',
                username: 'Daniel M.',
                userText: 'One of the best T-shirts I’ve bought! The quality is excellent, and the fit is just right. The tape details give it a unique edge without being too flashy. Definitely worth...',
                postDate: 'December 22, 2023'
            }
        ]
    },
    {
        id: '40750912-dd4a-46d0-bfdd-446dc8b57303',
        generationId: '1',
        image: 'images/products/new-arrivals/2.svg',
        name: 'Skinny Fit Jeans',
        rating: {
            starsImage: 'images/icons/stars/3.5.svg',
            starsQuantity: '3.5'
        },
        price: 24000,
        previousPrice: 26000,
        discount: 20,
        description: 'Slim-fitting jeans that provide a sleek silhouette, ideal for both casual and semi-formal occasions.',
        details: {
            keyFeatures: [
                'Skinny fit for a modern look',
                'Stretch fabric for flexibility',
                'Classic five-pocket design',
                'Button and zip fastening'
            ],
            materialAndCare: {
                material: '98% Cotton, 2% Elastane',
                care: 'Machine wash cold, tumble dry low'
            },
            sizing: 'True to size',
            shippingAndReturns: {
                shipping: 'Free shipping on orders over $50',
                returns: '30-day return policy'
            },
        },
        userReviews: [
            {
                reviewId: '7',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Emily R.',
                userText: 'I’m in love with these jeans! The fit is perfect, and they hug my body in all the right places. Super comfortable and stylish—I can wear them all day without any discomfort. Definitely a must-have!',
                postDate: 'January 10, 2025'
            },
            {
                reviewId: '8',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Jake M.',
                userText: 'Great pair of jeans! They look sharp and can be dressed up or down easily. The material is soft yet durable, and the stretch makes them very comfortable. I’ll be buying another pair soon!',
                postDate: 'December 28, 2024'
            },
            {
                reviewId: '9',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Sophia L.',
                userText: 'These jeans exceeded my expectations. They fit like a glove and give a sleek, modern look. Perfect for both casual outings and dinner dates. Highly recommend!',
                postDate: 'November 15, 2024'
            },
            {
                reviewId: '10',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Daniel K.',
                userText: 'Awesome quality and fit! I usually struggle to find jeans that are snug but not too tight, and these are just right. The fabric is breathable, and they maintain their shape even after multiple washes.',
                postDate: 'October 5, 2024'
            },
            {
                reviewId: '11',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.svg',
                username: 'Olivia P.',
                userText: 'I love how versatile these jeans are! I can wear them with sneakers for a casual look or with heels for a more polished style. The material is stretchy but doesn’t lose its shape. Will definitely repurchase!',
                postDate: 'September 22, 2024'
            },
            {
                reviewId: '12',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/5.svg',
                username: 'Mark T.',
                userText: 'Fantastic jeans! They look great, feel great, and work well for different occasions. The slim fit gives a modern touch without feeling restrictive. Highly recommend them to anyone looking for stylish and comfy jeans!',
                postDate: 'August 14, 2024'
            }
        ]
    },
    {
        id: '627072c7-86da-428c-92b0-a918c966db51',
        generationId: '1',
        image: 'images/products/new-arrivals/3.svg',
        name: 'Checkered Shirt',
        rating: {
            starsImage: 'images/icons/stars/4.5.svg',
            starsQuantity: '4.5'
        },
        price: 12000,
        description: 'A timeless checkered shirt offering a classic design, perfect for both casual and smart-casual looks.',
        details: {
            keyFeatures: [
                'Classic checkered pattern',
                'Button-down collar',
                'Regular fit for comfort',
                'Soft and breathable fabric'
            ],
            materialAndCare: {
                material: '100% Cotton',
                care: 'Machine wash cold, iron on low'
            },
            sizing: 'True to size',
            shippingAndReturns: {
                shipping: 'Free shipping on orders over $50',
                returns: '30-day return policy'
            }
        },
        userReviews: [
            {
                reviewId: '13',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Lucas W.',
                userText: 'I love this checkered shirt! The fabric is soft and breathable, making it perfect for all-day wear. The fit is just right, and it looks great with both jeans and chinos. Definitely a staple in my wardrobe!',
                postDate: 'February 5, 2025'
            },
            {
                reviewId: '14',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Anna M.',
                userText: 'A fantastic shirt with a classic design! The colors are vibrant, and the material feels high quality. It’s great for layering or wearing on its own. Highly recommend!',
                postDate: 'January 18, 2025'
            },
            {
                reviewId: '15',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Noah T.',
                userText: 'This checkered shirt is a must-have! It’s stylish, comfortable, and works for multiple occasions. Whether I wear it buttoned up or over a t-shirt, it always looks great.',
                postDate: 'December 10, 2024'
            },
            {
                reviewId: '16',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Sophia J.',
                userText: 'The perfect blend of casual and smart-casual. The fit is excellent—not too tight, not too loose. It looks sharp and doesn’t lose its shape after washing. Great buy!',
                postDate: 'November 2, 2024'
            },
            {
                reviewId: '17',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.svg',
                username: 'Ethan B.',
                userText: 'I bought this shirt for my brother, and he absolutely loves it! The fabric is durable yet soft, and the pattern is timeless. It’s now his go-to for casual outings.',
                postDate: 'October 21, 2024'
            },
            {
                reviewId: '18',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/5.svg',
                username: 'Mia K.',
                userText: 'A wardrobe essential! The checkered pattern is classic, and the fit is flattering. Whether I dress it up or down, it always looks great. Will be buying more in different colors!',
                postDate: 'September 9, 2024'
            }
        ]
    },
    {
        id: '04a3e75f-64dc-4989-9885-bd06a7d70418',
        generationId: '1',
        image: 'images/products/new-arrivals/4.svg',
        name: 'Sleeve Striped T-Shirt',
        rating: {
            starsImage: 'images/icons/stars/4.5.svg',
            starsQuantity: '4.5'
        },
        price: 13000,
        previousPrice: 26000,
        discount: 20,
        description: 'A trendy sleeve-striped T-shirt, combining comfort and style for a unique casual outfit.',
        details: {
            keyFeatures: [
                'Soft and lightweight fabric',
                'Contrast stripe details on sleeves',
                'Crew neck design',
                'Regular fit'
            ],
            materialAndCare: {
                material: '100% Cotton',
                care: 'Machine wash cold, do not bleach'
            },
            sizing: 'True to size',
            shippingAndReturns: {
                shipping: 'Free shipping on orders over $50',
                returns: '30-day return policy'
            }
        },
        userReviews: [
            {
                reviewId: '19',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Oliver R.',
                userText: 'This T-shirt is amazing! The sleeve stripes add a stylish touch, and the fabric is incredibly soft. It fits perfectly and feels comfortable all day long. A great addition to my casual wardrobe!',
                postDate: 'February 3, 2025'
            },
            {
                reviewId: '20',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Emma L.',
                userText: 'I love the design of this shirt! It’s simple yet eye-catching, and the material is high quality. It pairs well with jeans or shorts, making it a versatile piece. Definitely getting another one!',
                postDate: 'January 20, 2025'
            },
            {
                reviewId: '21',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'James B.',
                userText: 'Great fit and great look! The stripes on the sleeves give it a modern, sporty vibe. The fabric is breathable and holds up well after washing. Highly recommending!',
                postDate: 'December 12, 2024'
            },
            {
                reviewId: '22',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Sophia W.',
                userText: 'This is my new favorite T-shirt! It’s comfortable, stylish, and lightweight. The sleeve stripes make it stand out without being too flashy. Perfect for everyday wear!',
                postDate: 'November 5, 2024'
            },
            {
                reviewId: '23',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.svg',
                username: 'Ethan M.',
                userText: 'Fantastic quality and design. I’ve worn it multiple times, and it still looks as good as new. The fit is great—not too tight, not too loose. Will definitely be buying more colors!',
                postDate: 'October 23, 2024'
            },
            {
                reviewId: '24',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/5.svg',
                username: 'Liam K.',
                userText: 'A must-have for anyone who loves casual fashion! The sleeve stripes add a cool touch, and the fabric is super comfortable. Works well for any occasion, whether relaxing at home or going out.',
                postDate: 'September 8, 2024'
            }
        ]
    },
    {
        id: '20f9e687-d22e-47b9-aefe-174bd5d79afe',
        generationId: '2',
        image: 'images/products/top-selling/1.svg',
        name: 'Vertical Striped Shirt',
        rating: {
            starsImage: 'images/icons/stars/5.svg',
            starsQuantity: '5.0'
        },
        price: 21200,
        previousPrice: 23200,
        discount: 20,
        description: 'A sharp vertical striped shirt that adds a modern twist to your wardrobe for smart-casual looks.',
        details: {
            keyFeatures: [
                'Vertical stripes for a slimming effect',
                'Button-down front',
                'Regular fit',
                'Lightweight fabric for all-day comfort'
            ],
            materialAndCare: {
                material: '100% Cotton',
                care: 'Machine wash cold, iron on low'
            },
            sizing: 'True to size',
            shippingAndReturns: {
                shipping: 'Free shipping on orders over $50',
                returns: '30-day return policy'
            }
        },
        userReviews: [
            {
                reviewId: '25',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Daniel H.',
                userText: 'This shirt is a game-changer! The vertical stripes give it a sleek and modern look, and the fit is just perfect. It’s comfortable and breathable—great for both work and casual outings.',
                postDate: 'February 10, 2025'
            },
            {
                reviewId: '26',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Emily S.',
                userText: 'Absolutely love this striped shirt! The fabric feels premium, and the pattern is super flattering. It looks great tucked in or worn loose. A must-have for a stylish wardrobe!',
                postDate: 'January 25, 2025'
            },
            {
                reviewId: '27',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Michael J.',
                userText: 'A fantastic addition to my wardrobe! The design is classy, and the material is lightweight yet durable. Pairs well with jeans or dress pants. Highly recommend!',
                postDate: 'December 18, 2024'
            },
            {
                reviewId: '28',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Sophia G.',
                userText: 'The perfect blend of modern and classic style. The vertical stripes create a slimming effect, and the fit is spot on. I’ve already received so many compliments!',
                postDate: 'November 7, 2024'
            },
            {
                reviewId: '29',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.svg',
                username: 'Ethan C.',
                userText: 'This is my go-to shirt for smart-casual events. It’s stylish, comfortable, and fits great. The fabric is soft but holds its shape well. Will definitely be buying more colors!',
                postDate: 'October 30, 2024'
            },
            {
                reviewId: '30',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/5.svg',
                username: 'Liam T.',
                userText: 'A great find! The vertical stripes give a refined look, making it easy to dress up or down. Super comfortable to wear all day. I’ll be ordering another one soon!',
                postDate: 'September 12, 2024'
            }
        ]
    },
    {
        id: '2a93e572-ee5f-4c0a-85a0-89c96ae3145d',
        generationId: '2',
        image: 'images/products/top-selling/2.svg',
        name: 'Courage Graphic T-Shirt',
        rating: {
            starsImage: 'images/icons/stars/4.svg',
            starsQuantity: '4.0'
        },
        price: 14500,
        description: 'A bold graphic T-shirt with a courageous design, perfect for expressing personality and confidence.',
        details: {
            keyFeatures: [
                'Striking graphic print on the front',
                'Soft and breathable cotton fabric',
                'Classic crew neck',
                'Regular fit'
            ],
            materialAndCare: {
                material: '100% Cotton',
                care: 'Machine wash inside out, tumble dry low'
            },
            sizing: 'True to size',
            shippingAndReturns: {
                shipping: 'Free shipping on orders over $50',
                returns: '30-day return policy'
            }
        },
        userReviews: [
            {
                reviewId: '31',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Alex R.',
                userText: 'This T-shirt is amazing! The graphic design is bold and eye-catching, and the fabric feels super soft. It’s comfortable to wear all day, and I love the message it represents. Definitely one of my favorites!',
                postDate: 'February 8, 2025'
            },
            {
                reviewId: '32',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Mia L.',
                userText: 'I love how unique this shirt is! The print is high quality and doesn’t fade after washing. It fits perfectly and pairs well with jeans or shorts. Great way to showcase confidence!',
                postDate: 'January 22, 2025'
            },
            {
                reviewId: '33',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Jake M.',
                userText: 'Awesome design and great fit! The material is breathable, and the graphic stands out without being too loud. A must-have for anyone who loves statement pieces.',
                postDate: 'December 15, 2024'
            },
            {
                reviewId: '34',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Sophia T.',
                userText: 'This T-shirt gives off such a strong and confident vibe! The fabric is soft but durable, and the print looks just as good after multiple washes. I get compliments every time I wear it!',
                postDate: 'November 10, 2024'
            },
            {
                reviewId: '35',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.svg',
                username: 'Ethan W.',
                userText: 'Really impressed with the quality! The design is sharp, and the fit is just right—not too tight, not too loose. It’s a great everyday T-shirt with a powerful message!',
                postDate: 'October 28, 2024'
            },
            {
                reviewId: '36',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/5.svg',
                username: 'Liam K.',
                userText: 'A fantastic addition to my wardrobe! The design is bold yet stylish, and the comfort level is top-notch. Perfect for casual wear with a touch of personality!',
                postDate: 'September 14, 2024'
            }
        ]
    },
    {
        id: '2b9a2407-cbbc-4c0c-96f9-822960b0ac84',
        generationId: '2',
        image: 'images/products/top-selling/3.svg',
        name: 'Loose Fit Bermuda Shorts',
        rating: {
            starsImage: 'images/icons/stars/3.svg',
            starsQuantity: '3.0'
        },
        price: 8000,
        description: 'Comfortable loose-fit Bermuda shorts for a relaxed, summer-ready look, perfect for outdoor activities.',
        details: {
            keyFeatures: [
                'Loose fit for extra comfort',
                'Knee-length design',
                'Elastic waistband with drawstring',
                'Side and back pockets'
            ],
            materialAndCare: {
                material: '100% Cotton',
                care: 'Machine wash cold, do not bleach'
            },
            sizing: 'True to size',
            shippingAndReturns: {
                shipping: 'Free shipping on orders over $50',
                returns: '30-day return policy'
            }
        },
        userReviews: [
            {
                reviewId: '37',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Noah B.',
                userText: 'These Bermuda shorts are perfect for summer! They’re lightweight, breathable, and super comfortable. I wore them on a hike, and they felt great all day. Definitely getting another pair!',
                postDate: 'February 12, 2025'
            },
            {
                reviewId: '38',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Emma W.',
                userText: 'Absolutely love these shorts! The loose fit makes them so easy to move in, and the material is high quality. They’re great for casual wear and outdoor activities. Highly recommend!',
                postDate: 'January 30, 2025'
            },
            {
                reviewId: '39',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Liam D.',
                userText: 'Great pair of shorts! The fit is relaxed but still stylish, and the fabric feels durable yet soft. Perfect for hot days when you need something comfortable and airy.',
                postDate: 'December 20, 2024'
            },
            {
                reviewId: '40',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Sophia R.',
                userText: 'These shorts are my new summer favorite! The length is just right, and they go well with any T-shirt or tank top. I love how easy they are to style while staying comfortable.',
                postDate: 'November 8, 2024'
            },
            {
                reviewId: '41',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.svg',
                username: 'Ethan K.',
                userText: 'Really impressed with these Bermuda shorts! They don’t feel heavy, even on the hottest days, and the fit is exactly what I was looking for. A must-have for summer!',
                postDate: 'October 25, 2024'
            },
            {
                reviewId: '42',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/5.svg',
                username: 'Lucas M.',
                userText: 'Perfect shorts for outdoor activities! I’ve worn them for walks, beach trips, and even just lounging at home. Super comfortable and breathable—couldn’t ask for better!',
                postDate: 'September 10, 2024'
            }
        ]
    },
    {
        id: 'dd5896a7-2b59-4135-b642-b3d36687594a',
        generationId: '2',
        image: 'images/products/top-selling/4.svg',
        name: 'Faded Skinny Jeans',
        rating: {
            starsImage: 'images/icons/stars/4.5.svg',
            starsQuantity: '4.5'
        },
        price: 21000,
        description: 'Stylish faded skinny jeans with a worn-in look, combining comfort and contemporary fashion effortlessly.',
        details: {
            keyFeatures: [
                'Skinny fit with a modern cut',
                'Faded wash for a vintage look',
                'Stretch denim for flexibility',
                'Button and zip closuren'
            ],
            materialAndCare: {
                material: '98% Cotton, 2% Elastane',
                care: 'Machine wash cold, tumble dry low'
            },
            sizing: 'True to size',
            shippingAndReturns: {
                shipping: 'Free shipping on orders over $50',
                returns: '30-day return policy'
            }
        },
        userReviews: [
            {
                reviewId: '43',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Mason R.',
                userText: 'These jeans are amazing! The faded look gives them a cool, vintage vibe, and the fit is perfect. They’re super comfortable and stretchy, making them great for all-day wear.',
                postDate: 'February 15, 2025'
            },
            {
                reviewId: '44',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Olivia S.',
                userText: 'Absolutely love these jeans! The skinny fit is just right—not too tight, not too loose. The faded design makes them stylish and versatile. I can wear them with anything!',
                postDate: 'January 28, 2025'
            },
            {
                reviewId: '45',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Ethan J.',
                userText: 'Great quality and perfect fit! The material is soft but durable, and the faded effect adds a trendy touch. They look good with both sneakers and boots. Highly recommend!',
                postDate: 'December 22, 2024'
            },
            {
                reviewId: '46',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Sophia M.',
                userText: 'These jeans exceeded my expectations! They hug the body nicely without feeling restrictive. The faded wash gives them a modern edge, perfect for casual or night-out looks.',
                postDate: 'November 14, 2024'
            },
            {
                reviewId: '47',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.svg',
                username: 'Lucas T.',
                userText: 'Really happy with this purchase! The jeans are stylish, comfortable, and hold their shape well. The faded detailing makes them stand out without being over the top.',
                postDate: 'October 29, 2024'
            },
            {
                reviewId: '48',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/5.svg',
                username: 'Emma W.',
                userText: 'A must-have for any wardrobe! The fit is flattering, and the worn-in look gives them character. Super comfortable to wear all day—I’ll definitely be buying another pair!',
                postDate: 'September 18, 2024'
            }
        ]
    },
    {
        id: '90163065-fdb6-4e8c-a561-6a823cd8a4aa',
        generationId: '3',
        image: 'images/products/details/also-like/1.svg',
        name: 'Polo with Contrast Trims',
        rating: {
            starsImage: 'images/icons/stars/4.svg',
            starsQuantity: '4.0'
        },
        price: 21200,
        previousPrice: 26000,
        discount: 20,
        description: 'Classic polo shirt with contrast trims, ideal for a polished casual look with a sporty edge.',
        details: {
            keyFeatures: [
                'Contrast trims on collar and sleeves',
                'Buttoned placket',
                'Soft and breathable fabric',
                'Regular fit'
            ],
            materialAndCare: {
                material: '95% Cotton, 5% Elastane',
                care: 'Machine wash cold, iron on low'
            },
            sizing: 'True to size',
            shippingAndReturns: {
                shipping: 'Free shipping on orders over $50',
                returns: '30-day return policy'
            }
        },
        userReviews: [
            {
                reviewId: '49',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'James R.',
                userText: 'This polo shirt is fantastic! The contrast trims give it a stylish touch, and the fit is perfect. The fabric is breathable and comfortable, making it great for both casual and semi-formal occasions.',
                postDate: 'February 18, 2025'
            },
            {
                reviewId: '50',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Olivia M.',
                userText: 'Absolutely love this polo! The design is sleek, and the contrast details make it stand out. It’s super comfortable and pairs well with jeans or chinos. Definitely getting another one!',
                postDate: 'January 27, 2025'
            },
            {
                reviewId: '51',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Ethan K.',
                userText: 'A high-quality polo with a modern look. The fabric feels soft yet durable, and the fit is just right. Whether for work or a night out, this shirt works for any occasion.',
                postDate: 'December 19, 2024'
            },
            {
                reviewId: '52',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Sophia L.',
                userText: 'This is my go-to polo now! The contrast trims make it unique, and the material is lightweight but sturdy. It keeps its shape even after multiple washes. Highly recommend!',
                postDate: 'November 10, 2024'
            },
            {
                reviewId: '53',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.svg',
                username: 'Lucas B.',
                userText: 'Great fit, great quality! The contrast details add a sporty vibe, and the shirt feels premium. I’ve received so many compliments wearing it. A must-have for any wardrobe!',
                postDate: 'October 28, 2024'
            },
            {
                reviewId: '54',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/5.svg',
                username: 'Emma T.',
                userText: 'Really impressed with this polo! The fabric is soft, and the contrast trims give it a refined yet casual look. Perfect for everyday wear or dressing up a bit.',
                postDate: 'September 15, 2024'
            }
        ]
    },
    {
        id: '367002e9-ebd2-40ff-a78d-10dd6e954cce',
        generationId: '3',
        image: 'images/products/details/also-like/2.svg',
        name: 'Gradient Graphic T-shirt',
        rating: {
            starsImage: 'images/icons/stars/3.5.svg',
            starsQuantity: '3.5'
        },
        price: 14500,
        description: 'A gradient graphic T-shirt, featuring a striking design that creates a bold visual statement.',
        details: {
            keyFeatures: [
                'Eye-catching gradient print',
                'Soft cotton fabric',
                'Crew neck for a classic look',
                'Regular fit'
            ],
            materialAndCare: {
                material: '100% Cotton',
                care: 'Machine wash cold, do not bleach'
            },
            sizing: 'True to size',
            shippingAndReturns: {
                shipping: 'Free shipping on orders over $50',
                returns: '30-day return policy'
            }
        },
        userReviews: [
            {
                reviewId: '55',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Daniel H.',
                userText: 'This T-shirt is amazing! The gradient effect looks so cool, and the colors blend beautifully. The fabric is soft and comfortable, making it perfect for everyday wear.',
                postDate: 'February 20, 2025'
            },
            {
                reviewId: '56',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Olivia R.',
                userText: 'I love how unique this shirt is! The gradient design really stands out, and the quality is fantastic. It’s lightweight, breathable, and fits perfectly. Definitely one of my favorites!',
                postDate: 'January 29, 2025'
            },
            {
                reviewId: '57',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Ethan M.',
                userText: 'Great T-shirt! The graphic design is bold and stylish without being too loud. The material is soft and holds up well after multiple washes. Highly recommend!',
                postDate: 'December 21, 2024'
            },
            {
                reviewId: '58',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Sophia J.',
                userText: 'This is my new favorite shirt! The gradient effect gives it such a modern look, and the fit is just right. It works great with jeans, shorts, or even layered under a jacket.',
                postDate: 'November 12, 2024'
            },
            {
                reviewId: '59',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.svg',
                username: 'Liam T.',
                userText: 'Really impressed with the quality of this shirt! The colors are vibrant, and the design adds a nice touch to any casual outfit. Comfortable and stylish—what more could you ask for?',
                postDate: 'October 26, 2024'
            },
            {
                reviewId: '60',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/5.svg',
                username: 'Emma L.',
                userText: 'Such a cool T-shirt! The gradient fade makes it stand out, and the fabric feels great on the skin. It’s perfect for casual outings or just relaxing at home. I’m getting another one soon!',
                postDate: 'September 16, 2024'
            }
        ]
    },
    {
        id: 'b0329ebc-f5de-4fab-bd42-90619cf7ad5f',
        generationId: '3',
        image: 'images/products/new-arrivals/3.svg',
        name: 'Polo with Tipping Details',
        rating: {
            starsImage: 'images/icons/stars/4.5.svg',
            starsQuantity: '4.5'
        },
        price: 18000,
        description: 'Sleek polo shirt with tipping details for a refined and sporty touch to your casual wardrobe.',
        details: {
            keyFeatures: [
                'Tipping details on collar and cuffs',
                'Button-up placket',
                'Regular fit',
                'Soft and breathable fabric'
            ],
            materialAndCare: {
                material: '95% Cotton, 5% Elastane',
                care: 'Machine wash cold, iron on low'
            },
            sizing: 'True to size',
            shippingAndReturns: {
                shipping: 'Free shipping on orders over $50',
                returns: '30-day return policy'
            }
        },
        userReviews: [
            {
                reviewId: '61',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Nathan S.',
                userText: 'This polo is fantastic! The tipping details give it a refined yet sporty touch, and the fit is just right. The fabric is breathable and super comfortable. Perfect for casual and semi-formal occasions!',
                postDate: 'February 22, 2025'
            },
            {
                reviewId: '62',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Olivia M.',
                userText: 'I love the stylish accents on this polo! The contrast tipping adds a premium look, and the material feels soft but durable. It’s great for both work and weekends. Highly recommend!',
                postDate: 'January 30, 2025'
            },
            {
                reviewId: '63',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Ethan R.',
                userText: 'Great quality and sleek design! The tipping details make it stand out without being too flashy. The fit is comfortable, and it pairs well with both jeans and dress pants.',
                postDate: 'December 24, 2024'
            },
            {
                reviewId: '64',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Sophia L.',
                userText: 'This polo is exactly what I was looking for! It’s well-made, looks sharp, and feels great on the skin. The tipping details give it just the right amount of style.',
                postDate: 'November 15, 2024'
            },
            {
                reviewId: '65',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.svg',
                username: 'Liam D.',
                userText: 'A must-have for any wardrobe! The subtle detailing makes it look premium, and the fabric is soft yet structured. Works great for both casual and slightly dressier outfits.',
                postDate: 'October 27, 2024'
            },
            {
                reviewId: '66',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/5.svg',
                username: 'Emma T.',
                userText: 'Really impressed with this polo! The tipping details add a nice contrast, and the fit is flattering. It holds its shape well after washing and feels great to wear all day.',
                postDate: 'September 17, 2024'
            }
        ]
    },
    {
        id: '3eafb575-6e3f-4b0c-9c5b-fe5b09aea20a',
        generationId: '3',
        image: 'images/products/new-arrivals/4.svg',
        name: 'Black Striped T-shirt',
        rating: {
            starsImage: 'images/icons/stars/4.5.svg',
            starsQuantity: '5.0'
        },
        price: 12000,
        previousPrice: 15000,
        discount: 30,
        description: 'Black striped T-shirt offering a stylish and versatile piece for casual, everyday wear.',
        details: {
            keyFeatures: [
                'Subtle stripe design',
                'Soft and comfortable cotton fabric',
                'Crew neck design',
                'Regular fit'
            ],
            materialAndCare: {
                material: '100% Cotton',
                care: 'Machine wash cold, do not bleach'
            },
            sizing: 'True to size',
            shippingAndReturns: {
                shipping: 'Free shipping on orders over $50',
                returns: '30-day return policy'
            }
        },
        userReviews: [
            {
                reviewId: '67',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Jacob R.',
                userText: 'This T-shirt is perfect! The black stripes give it a sleek and modern look, and the fit is just right. The fabric is soft and breathable, making it great for all-day wear.',
                postDate: 'February 25, 2025'
            },
            {
                reviewId: '68',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Olivia K.',
                userText: 'I love how versatile this T-shirt is! The stripes add a stylish touch, and it pairs well with anything—jeans, shorts, or even under a jacket. Super comfortable too!',
                postDate: 'January 28, 2025'
            },
            {
                reviewId: '69',
                generationId: '1',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Ethan W.',
                userText: 'Great quality and fit! The material is lightweight but durable, and the striped design gives it a timeless feel. Definitely one of my go-to shirts now.',
                postDate: 'December 22, 2024'
            },
            {
                reviewId: '70',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.5.svg',
                username: 'Sophia N.',
                userText: 'Such a great T-shirt! It’s stylish without being too flashy, and the black stripes make it easy to mix and match with different outfits. Perfect for casual wear!',
                postDate: 'November 10, 2024'
            },
            {
                reviewId: '71',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/4.svg',
                username: 'Liam T.',
                userText: 'I wasn’t sure about striped shirts, but this one changed my mind! The design is subtle yet stylish, and the fabric feels amazing. It holds up well after washing too.',
                postDate: 'October 30, 2024'
            },
            {
                reviewId: '72',
                generationId: '2',
                reviewRatingImage: 'images/icons/stars/5.svg',
                username: 'Emma L.',
                userText: 'This T-shirt is a must-have! The black stripes give it a classic look, and the fit is really flattering. Super comfortable for everyday wear—I’m buying another one!',
                postDate: 'September 15, 2024'
            }
        ]
    }
]
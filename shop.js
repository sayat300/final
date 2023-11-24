const productNames = ["PowerBlend Mass Gainer", "PureProtein Whey Isolate", "PureGain Creatine Monohydrate", "AminoIgnite BCAA Blend"];
const prices = ["15,000", "20,000", "25,000", "23,000",];
const descriptions = ["Fuel your gains with PowerBlend Mass Gainer, a premium blend designed for serious muscle enthusiasts. Packed with high-quality proteins, complex carbs, and essential fats, this formula accelerates muscle growth, supports rapid recovery, and provides a convenient way to meet your daily nutritional needs.", "Revitalize your muscles with PureProtein Whey Isolate, a superior protein supplement crafted for dedicated fitness enthusiasts. Packed with premium whey isolate, this formula delivers a potent dose of pure protein to fuel your muscle-building journey. Whether you're aiming for lean muscle development or post-workout recovery, PureProtein Whey Isolate is your key to achieving peak performance.", "Unleash your strength with PureGain Creatine Monohydrate, a powerhouse supplement designed to amplify your performance in the gym. This pure and micronized creatine powder enhances ATP production, providing the energy your muscles need for explosive lifts and sustained endurance. Elevate your training and push beyond your limits with PureGain Creatine Monohydrate.", "Ignite your workout with AminoIgnite BCAA Blend, a carefully crafted formula to fuel your muscles with essential branched-chain amino acids. Perfect for intra-workout hydration and recovery, this BCAA blend supports muscle endurance, reduces fatigue, and kick-starts the muscle-building process. Elevate your fitness performance with AminoIgnite."];
const compositions = ["Protein Powerhouse: A blend of whey isolate and casein for sustained muscle nourishment. Carb Complex: A mix of complex carbohydrates replenishes energy stores for intense workouts. Healthy Fats: MCT oil and flaxseed contribute essential fats for overall well-being. Vitamins & Minerals: Fortified for immune support, bone health, and balanced nutrition.", "Whey Isolate: Fast-absorbing and rich in essential amino acids for efficient muscle nourishment.", "Creatine Monohydrate: Micronized for optimal absorption, fueling ATP regeneration and muscle power.", "Leucine, Isoleucine, and Valine: Essential amino acids in the optimal 2:1:1 ratio for maximum muscle support."];
const howToUses = ["Mix 2 scoops with water or milk post-workout or as a convenient meal replacement. Elevate your fitness journey with PowerBlend Mass Gainer and experience the difference!", "Mix 1 scoop with water or your preferred beverage after workouts or as a protein boost in your daily routine.", "Take 5 grams (1 teaspoon) daily, mixed with water or your favorite beverage. For best results, consume before or after workouts.", "Mix 1 scoop with water and consume during workouts or throughout the day for enhanced hydration and muscle support."];
const images = ["images/gainer.png", "images/protein.jpg", "images/creatine.jpg", "images/bcaa.jpg"];

const shop = document.getElementById('shop');

for (let index = 0; index < productNames.length; index++) {

    const card = document.createElement('div');
    card.className = 'card';
    card.style.marginTop = '20px';

    const cardBody = document.createElement('div');
    if (window.innerWidth < 768) {
        cardBody.className = 'card-body grid grid-cols-2 d-flex flex-column';
    } else {
        cardBody.className = 'card-body grid grid-cols-2 d-flex';
    }
    cardBody.style.padding = '0';

    const imageDiv = document.createElement('div');
    imageDiv.className = 'd-flex w-100 align-items-center';

    const image = document.createElement('img');
    image.src = images[index];
    image.className = 'w-100 py-4 px-4';
    image.alt = '';

    const contentDiv = document.createElement('div');
    contentDiv.style.marginLeft = '20px';
    contentDiv.style.marginRight = '20px';
    contentDiv.className = 'h-100 py-2';

    const productName = document.createElement('h3');
    productName.className = 'font-g-bold';
    productName.innerHTML = 'Product: <span class="font-g-regular">' + productNames[index] + '</span>';

    const price = document.createElement('h3');
    price.className = 'font-g-bold';
    price.innerHTML = 'Price: <span class="font-g-regular">' + prices[index] + ' tg</span>';

    const amountDiv = document.createElement('div');
    amountDiv.className = 'font-g-bold d-flex align-items-center fs-3';

    const amountLabel = document.createElement('div');
    amountLabel.className = 'd-flex align-items-center';
    amountLabel.textContent = 'Amount:';

    const decrementButton = document.createElement('button');
    decrementButton.className = 'bg-white d-flex align-items-center justify-content-center mx-2';
    decrementButton.style.width = '40px';
    decrementButton.style.height = '40px';
    decrementButton.textContent = '-';
    decrementButton.addEventListener('click', decrementAmount);

    const amountSpan = document.createElement('span');
    amountSpan.className = 'font-g-regular px-2';
    amountSpan.textContent = '0';

    const incrementButton = document.createElement('button');
    incrementButton.className = 'bg-white d-flex align-items-center justify-content-center mx-2';
    incrementButton.style.width = '40px';
    incrementButton.style.height = '40px';
    incrementButton.textContent = '+';
    incrementButton.addEventListener('click', incrementAmount);

    const descriptionTitle = document.createElement('h3');
    descriptionTitle.className = 'font-g-bold';
    descriptionTitle.textContent = 'Description:';

    const descriptionText = document.createElement('p');
    descriptionText.className = 'fs-6';
    descriptionText.textContent = descriptions[index];

    const compositionTitle = document.createElement('h3');
    compositionTitle.className = 'font-g-bold';
    compositionTitle.textContent = 'Composition:';

    const compositionText = document.createElement('p');
    compositionText.className = 'fs-6';
    compositionText.textContent = compositions[index];

    const howToUseTitle = document.createElement('h3');
    howToUseTitle.className = 'font-g-bold';
    howToUseTitle.textContent = 'How to use:';

    const howToUseText = document.createElement('p');
    howToUseText.className = 'fs-6';
    howToUseText.textContent = howToUses[index];

    const addToCartButton = document.createElement('button');
    addToCartButton.className = 'buy';
    addToCartButton.textContent = 'Buy';

    addToCartButton.addEventListener('click', addToCartHandler);

    imageDiv.appendChild(image);

    amountDiv.appendChild(amountLabel);
    amountDiv.appendChild(decrementButton);
    amountDiv.appendChild(amountSpan);
    amountDiv.appendChild(incrementButton);

    contentDiv.appendChild(productName);
    contentDiv.appendChild(price);

    contentDiv.appendChild(amountDiv);

    contentDiv.appendChild(descriptionTitle);
    contentDiv.appendChild(descriptionText);
    contentDiv.appendChild(compositionTitle);
    contentDiv.appendChild(compositionText);
    contentDiv.appendChild(howToUseTitle);
    contentDiv.appendChild(howToUseText);

    contentDiv.appendChild(addToCartButton);

    cardBody.appendChild(imageDiv);
    cardBody.appendChild(contentDiv);

    card.appendChild(cardBody);

    shop.appendChild(card);

    function decrementAmount() {
        const currentAmount = parseInt(amountSpan.textContent, 10);
        if (currentAmount > 0) {
            amountSpan.textContent = (currentAmount - 1).toString();
        }
    }
    
    function incrementAmount() {
        const currentAmount = parseInt(amountSpan.textContent, 10);
        amountSpan.textContent = (currentAmount + 1).toString();
    }
    
    function addToCartHandler() {
        alert("You successfully bought " + amountSpan.textContent + " " + productNames[index]);
    }
}

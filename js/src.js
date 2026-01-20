document.addEventListener("DOMContentLoaded", () => {
    const changeColor = document.getElementById('color-change-btn')

    const cardOne = document.getElementById('one')
    const cardTwo = document.getElementById('two')
    const cardThree = document.getElementById('three')
    const cardFour = document.getElementById('four')
    const cardFive = document.getElementById('five')

    const cardOneValue = document.getElementById('color-value-one')
    const cardTwoValue = document.getElementById('color-value-two')
    const cardThreeValue = document.getElementById('color-value-three')
    const cardFourValue = document.getElementById('color-value-four')
    const cardFiveValue = document.getElementById('color-value-five')

    let isOneLocked = false;
    let isTwoLocked = false;
    let isThreeLocked = false;
    let isFourLocked = false;
    let isFiveLocked = false;

    const colorChara = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']


    ShuffleColor();

    function newColor() {
        let start = 0;
        let newHex = "#"
        for (start; start < 6; start++) {
            let i = Math.floor(Math.random() * colorChara.length);
            newHex += colorChara[i];
        }
        return newHex;
    }

    function ShuffleColor() {
        let color;
        
        if (isOneLocked != true){
        color = newColor();
        cardOne.style.backgroundColor = color;
        cardOneValue.textContent = color;
        }
        
        if (isTwoLocked != true){
        color = newColor()
        cardTwo.style.backgroundColor = color;
        cardTwoValue.textContent = color;
        }

        if (isThreeLocked != true){
        color = newColor()
        cardThree.style.backgroundColor = color;
        cardThreeValue.textContent = color;
        }

        if (isFourLocked != true){
        color = newColor()
        cardFour.style.backgroundColor = color;
        cardFourValue.textContent = color;
        }

        if (isFiveLocked != true){
        color = newColor()
        cardFive.style.backgroundColor = color;
        cardFiveValue.textContent = color;
        }
    }

    changeColor.addEventListener("click", ShuffleColor);

    const oneLockBtn = document.getElementById('unlocked-one')
    const twoLockBtn = document.getElementById('unlocked-two')
    const threeLockBtn = document.getElementById('unlocked-three')
    const fourLockBtn = document.getElementById('unlocked-four')
    const fiveLockBtn = document.getElementById('unlocked-five')

    const oneUnlockBtn = document.getElementById('locked-one')
    const twoUnlockBtn = document.getElementById('locked-two')
    const threeUnlockBtn = document.getElementById('locked-three')
    const fourUnlockBtn = document.getElementById('locked-four')
    const fiveUnlockBtn = document.getElementById('locked-five')

    oneLockBtn.addEventListener('click', () => {
        isOneLocked = true;
        oneUnlockBtn.style.display = 'block';
        oneLockBtn.style.display = 'none';
    });
    oneUnlockBtn.addEventListener('click', () => {
        isOneLocked = false;
        oneUnlockBtn.style.display = 'none';
        oneLockBtn.style.display = 'block';
    });

    twoLockBtn.addEventListener('click', () => {
        isTwoLocked = true;
        twoUnlockBtn.style.display = 'block';
        twoLockBtn.style.display = 'none';
    });
    twoUnlockBtn.addEventListener('click', () => {
        isTwoLocked = false;
        twoUnlockBtn.style.display = 'none';
        twoLockBtn.style.display = 'block';
    });

    threeLockBtn.addEventListener('click', () => {
        isThreeLocked = true;
        threeUnlockBtn.style.display = 'block';
        threeLockBtn.style.display = 'none';
    });
    threeUnlockBtn.addEventListener('click', () => {
        isThreeLocked = false;
        threeUnlockBtn.style.display = 'none';
        threeLockBtn.style.display = 'block';
    });

    fourLockBtn.addEventListener('click', () => {
        isFourLocked = true;
        fourUnlockBtn.style.display = 'block';
        fourLockBtn.style.display = 'none';
    });
    fourUnlockBtn.addEventListener('click', () => {
        isFourLocked = false;
        fourUnlockBtn.style.display = 'none';
        fourLockBtn.style.display = 'block';
    });

    fiveLockBtn.addEventListener('click', () => {
        isFiveLocked = true;
        fiveUnlockBtn.style.display = 'block';
        fiveLockBtn.style.display = 'none';
    });
    fiveUnlockBtn.addEventListener('click', () => {
        isFiveLocked = false;
        fiveUnlockBtn.style.display = 'none';
        fiveLockBtn.style.display = 'block';
    });

    const oneCopy = document.getElementById('one-copy-btn');
    const twoCopy = document.getElementById('two-copy-btn');
    const threeCopy = document.getElementById('three-copy-btn');
    const fourCopy = document.getElementById('four-copy-btn');
    const fiveCopy = document.getElementById('five-copy-btn');

    oneCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(cardOneValue.textContent);
    });
    twoCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(cardTwoValue.textContent);
    });
    threeCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(cardThreeValue.textContent);
    });
    fourCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(cardFourValue.textContent);
    });
    fiveCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(cardFiveValue.textContent);
    });
})
const tarotCards = [
    { 
        name: '愚者', 
        image: 'images/00-fool.jpg',
        meaning: '新的開始、冒險、自由、天真',
        upright: '冒險、無憂無慮、純真、自發性',
        reversed: '魯莽、不負責任、過度冒險'
    },
    { 
        name: '魔術師', 
        image: 'images/01-magician.jpg',
        meaning: '創造力、技能、意志力、自信',
        upright: '創造力、技巧、專注、實現目標',
        reversed: '技能不足、濫用力量、欺騙'
    },
    { 
        name: '女祭司', 
        image: 'images/02-priestess.jpg',
        meaning: '直覺、神秘、內在知識、智慧',
        upright: '直覺、神秘、內在智慧、靈性',
        reversed: '直覺受阻、表面化、缺乏洞察力'
    },
    { 
        name: '女皇', 
        image: 'images/3.jpg',
        meaning: '豐收、母性、創造力、愛情',
        upright: '豐盛、母性、創造力、和諧',
        reversed: '依賴、空虛、缺乏創造力'
    },
    { 
        name: '皇帝', 
        image: 'images/4.jpg',
        meaning: '權威、領導力、穩定、控制',
        upright: '權威、領導、穩定、建立',
        reversed: '專制、固執、缺乏彈性'
    },
    { 
        name: '教皇', 
        image: 'images/5.jpg',
        meaning: '傳統、信仰、指導、學習',
        upright: '精神指引、傳統、教育、信仰',
        reversed: '教條、限制、反叛'
    },
    { 
        name: '戀人', 
        image: 'images/6.jpg',
        meaning: '愛情、選擇、和諧、關係',
        upright: '和諧、愛情、選擇、結合',
        reversed: '不和諧、錯誤選擇、分離'
    },
    { 
        name: '戰車', 
        image: 'images/7.jpg',
        meaning: '勝利、意志力、決心、進展',
        upright: '勝利、進展、決心、控制',
        reversed: '失控、阻礙、衝突'
    },
    { 
        name: '力量', 
        image: 'images/8.jpg',
        meaning: '勇氣、耐心、同情心、內在力量',
        upright: '內在力量、勇氣、耐心',
        reversed: '自我懷疑、軟弱、缺乏信心'
    },
    { 
        name: '隱士', 
        image: 'images/9.jpg',
        meaning: '內省、智慧、孤獨、指引',
        upright: '內省、智慧、獨處、指引',
        reversed: '孤立、迷失方向、退縮'
    },
    { 
        name: '命運之輪', 
        image: 'images/10.jpg',
        meaning: '改變、機會、命運、循環',
        upright: '命運、轉機、循環、進展',
        reversed: '不幸、阻礙、停滯'
    },
    { 
        name: '正義', 
        image: 'images/11.jpg',
        meaning: '公平、真理、因果、平衡',
        upright: '正義、平衡、誠實、因果',
        reversed: '不公、失衡、偏見'
    },
    { 
        name: '吊人', 
        image: 'images/12.jpg',
        meaning: '犧牲、放下、新視角、等待',
        upright: '犧牲、等待、新視角',
        reversed: '無謂犧牲、猶豫不決'
    },
    { 
        name: '死神', 
        image: 'images/13.jpg',
        meaning: '結束、改變、轉變、重生',
        upright: '結束、轉變、重生、改變',
        reversed: '抗拒改變、停滯、衰退'
    },
    { 
        name: '節制', 
        image: 'images/14.jpg',
        meaning: '平衡、和諧、節制、整合',
        upright: '平衡、節制、調和、整合',
        reversed: '失衡、過度、不節制'
    },
    { 
        name: '惡魔', 
        image: 'images/15.jpg',
        meaning: '束縛、誘惑、執著、物質主義',
        upright: '束縛、誘惑、執著',
        reversed: '掙脫束縛、覺醒、釋放'
    },
    { 
        name: '高塔', 
        image: 'images/16.jpg',
        meaning: '突變、崩塌、釋放、啟示',
        upright: '突變、崩塌、解放',
        reversed: '避免災難、循序漸進'
    },
    { 
        name: '星星', 
        image: 'images/17.jpg',
        meaning: '希望、靈感、指引、平靜',
        upright: '希望、靈感、指引',
        reversed: '失望、迷失方向'
    },
    { 
        name: '月亮', 
        image: 'images/18.jpg',
        meaning: '直覺、幻想、恐懼、潛意識',
        upright: '直覺、潛意識、幻想',
        reversed: '混亂、恐懼、誤解'
    },
    { 
        name: '太陽', 
        image: 'images/19.jpg',
        meaning: '快樂、活力、成功、正面',
        upright: '快樂、成功、正面能量',
        reversed: '暫時的不如意、低潮'
    },
    { 
        name: '審判', 
        image: 'images/20.jpg',
        meaning: '重生、覺醒、改變、決定',
        upright: '重生、覺醒、寬恕',
        reversed: '拒絕改變、後悔'
    },
    { 
        name: '世界', 
        image: 'images/21.jpg',
        meaning: '完成、圓滿、統整、成就',
        upright: '完成、成就、圓滿、整合',
        reversed: '停滯不前、未完成、拖延'
    }
];

const cardsContainer = document.getElementById('cardsContainer');
const drawButton = document.getElementById('drawButton');
const readingResult = document.getElementById('readingResult');

let drawnCards = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function drawCard() {
    if (drawnCards.length >= 3) {
        alert('已經抽取了三張牌！請重新開始。');
        return;
    }

    const shuffledCards = shuffleArray([...tarotCards]);
    const card = shuffledCards[0];
    drawnCards.push(card);

    const isReversed = Math.random() < 0.5;
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.innerHTML = `
        <div class="card-inner ${isReversed ? 'reversed' : ''}">
            <img src="${card.image}" alt="${card.name}">
            <div class="card-content">
                <h3>${card.name}</h3>
                <p>${isReversed ? card.reversed : card.upright}</p>
            </div>
        </div>
    `;

    cardsContainer.appendChild(cardElement);

    if (drawnCards.length === 3) {
        const interpretation = interpretReading();
        readingResult.innerHTML = `
            <h3>塔羅牌解讀</h3>
            <p>${interpretation}</p>
        `;
    }
}

function interpretReading() {
    return `這次的塔羅牌陣象徵著：<br><br>
    <strong>過去：</strong>${drawnCards[0].name}<br>
    ${drawnCards[0].upright}<br><br>
    <strong>現在：</strong>${drawnCards[1].name}<br>
    ${drawnCards[1].upright}<br><br>
    <strong>未來：</strong>${drawnCards[2].name}<br>
    ${drawnCards[2].upright}`;
}

function resetReading() {
    drawnCards = [];
    cardsContainer.innerHTML = '';
    readingResult.innerHTML = '';
}

drawButton.addEventListener('click', () => {
    if (drawnCards.length === 0 || drawnCards.length >= 3) {
        resetReading();
    }
    drawCard();
}); 
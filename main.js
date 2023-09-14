const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = 'Hoje, o :insertx: foi assistir a uma partida emocionante do Vasco no estádio de São Januário. O jogo foi contra o :inserty: e terminou com uma vitória de :insertz:. A torcida estava em festa!';

const insertX = ['torcedor fiel', 'membro da diretoria', 'jogador'];
const insertY = ['Flamengo', 'Botafogo', 'Fluminense'];
const insertZ = ['3 a 0', '2 a 1', '4 a 2'];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    if (customName.value !== '') {
        newStory = newStory.replace('Vasco', customName.value);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}

function randomValueFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

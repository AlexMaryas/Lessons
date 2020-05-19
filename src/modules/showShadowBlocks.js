const showShadowBlocks = () => {
    const shadowBlocks = document.querySelectorAll('.shadow-block '),
        addSentenceBtn = document.querySelector('.add-sentence-btn');
    addSentenceBtn.addEventListener('click', () => {
        shadowBlocks.forEach(block =>{
            block.parentElement.classList.remove('visible-sm-block');
            block.parentElement.classList.remove('hidden');

        });
        addSentenceBtn.style.display = 'none';
    });
};

export default showShadowBlocks;
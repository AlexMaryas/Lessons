const showShadowBlocks = () => {
    const hiddenBlocks = document.querySelectorAll('.hidden'),
        visibleSmBlock = document.querySelector('.visible-sm-block'),
        addSentenceBtn = document.querySelector('.add-sentence-btn');
    addSentenceBtn.addEventListener('click', () => {
        hiddenBlocks.forEach(block =>{
            block.classList.remove('hidden');
        });
        visibleSmBlock.classList.remove('visible-sm-block');
        addSentenceBtn.style.display = 'none';
    });
};

export default showShadowBlocks;
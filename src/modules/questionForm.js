import callModal from './callModal';

const questionForm = () => {
    const question = document.querySelector('.director-form input');
    const initQuestionObj = () => {
        let questObj = {
            'user_quest': question.value
        };
        return questObj;
    };
    question.addEventListener('change', () => {
        event.preventDefault();
        callModal('consultation', 4, initQuestionObj(),[question]);
    });
        
};
export default questionForm;
const filterForm = document.querySelector('.filter form');

const selectedFields = document.querySelectorAll('.filter select');

export const submitFilterForm = function() {
    if (!filterForm || selectedFields.length === 0) {
        return;
    }
    selectedFields.forEach(select => {
        select.addEventListener('change', () => {
            filterForm.submit();
        })
    })
};
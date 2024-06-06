const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
    const li =item.parentElement;
    
    item.addEventListener('click',function(){
        allSideMenu.forEach(i=>{
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
})




//Toogle Side Bar

const menuBar=document.querySelector("#content nav  .bx.bx-menu");
const sidebar=document.getElementById('sidebar');


document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.add('hide'); // Hide the sidebar by default

    menuBar.addEventListener('click',function(){
        sidebar.classList.toggle('hide');
    })

    const sideMenuItems = document.querySelectorAll("#sidebar .side-menu li");

    sideMenuItems.forEach(item => {
        item.addEventListener('dblclick', function(event) {
            event.preventDefault(); // Prevents the default link behavior
            
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('hide');
        });
    });
})

document.addEventListener('DOMContentLoaded', () => {
    const feedbackBtn = document.getElementById('feedbackBtn');
    const feedbackFormContainer = document.getElementById('feedbackFormContainer');
    const cancelBtn = document.getElementById('cancelBtn');
    const feedbackForm = document.getElementById('feedbackForm');

    feedbackBtn.addEventListener('click', () => {
        feedbackFormContainer.classList.remove('hidden');
    });

    cancelBtn.addEventListener('click', () => {
        feedbackFormContainer.classList.add('hidden');
    });

    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const feedbackText = document.getElementById('feedbackText').value;
        alert('Feedback sent to admin: ' + feedbackText);
        feedbackForm.reset();
        feedbackFormContainer.classList.add('hidden');
    });
});

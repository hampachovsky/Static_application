const on_Title_Slide_Click_Open_Modal = document.getElementsByClassName(
    "Title-Slide-Click-Open-Modal"
);
let Current_Slide = 0;

Show_Slide(); //Show first slide
function Change_Slide(change_slide) {
    Current_Slide += change_slide; //on click + or - slide
    Show_Slide();
}

function Show_Slide() {
    const Slide = document.getElementsByClassName("Slide");

    if (Current_Slide >= Slide.length) {
        Current_Slide = 0;
    }
    if (Current_Slide < 0) {
        Current_Slide = Slide.length - 1;
    }
    for (let i = 0; i < Slide.length; i++) {
        Slide[i].style.display = "none";
        on_Title_Slide_Click_Open_Modal[i].style.color = "rgb(255,255,255)"; // change to default color
    }
    $(Slide[Current_Slide]).fadeIn("fast");
}

const modal_alert = document.getElementsByClassName("modal-alert");
const btn_close_modal = document.getElementsByClassName("btn-close");

for (let index = 0; index < on_Title_Slide_Click_Open_Modal.length; index++) {
    on_Title_Slide_Click_Open_Modal[index].addEventListener("click", event => {
        event.target.style.color = "rgb(34, 34, 34)"; //Click on title slide change color
        $(modal_alert[index])
            .fadeIn("medium")
            .css({
                display: "flex"
            }); // show modal
    });

    btn_close_modal[index].addEventListener("click", () => {
        $(modal_alert[index]).fadeOut("medium"); //hide when click on btn close
    });
}

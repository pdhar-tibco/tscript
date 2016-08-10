document.addEventListener("DomContentLoaded", () => {
    const txtInput = <HTMLInputElement>document.getElementById("txtInput");
    const btnShowAlert = document.getElementById("btnShowAlert") as HTMLButtonElement;


    btnShowAlert.addEventListener("click", () => {
        alert(txtInput.value);
    });
});
import Swal from "sweetalert2";

function ShowAlert ({title,text,icon,confirmButtonText}) {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: confirmButtonText,
    })
}

export default ShowAlert;
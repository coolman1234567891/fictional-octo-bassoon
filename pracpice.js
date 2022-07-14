


function addUser()
{
    user_name = document.getElementById("user_name").ariaValueMax;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}

const supabaseUrl = "https://skerqyzfgultmwixcnzu.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrZXJxeXpmZ3VsdG13aXhjbnp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyNDkyNjgsImV4cCI6MjA4ODgyNTI2OH0.i2KddciOYeSqKKJWppvWsMREnB4uPdSBX9H1DlrbFWU";

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

document.addEventListener("DOMContentLoaded", function(){

const form = document.getElementById("signupForm");

form.addEventListener("submit", async function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirmPassword").value;

if(password !== confirmPassword){
alert("Passwords do not match");
return;
}

try{

// CREATE AUTH USER
const { data, error } = await supabaseClient.auth.signUp({
email: email,
password: password
});

if(error){
alert("Signup failed: " + error.message);
return;
}

const user = data.user || data.session?.user;

if(!user){
console.log("User object:", data);
alert("User not returned yet. Please confirm email and login.");
return;
}

// INSERT PROFILE INTO USERS TABLE
const { error: insertError } = await supabaseClient
.from("users")
.insert([
{
id: user.id,
name: name,
email: email,
phone: phone
}
]);

if(insertError){
console.error("Insert Error:", insertError);
alert("Profile not created: " + insertError.message);
return;
}

alert("Signup successful! Please login.");
window.location.href = "login.html";

}
catch(err){

console.log(err);
alert("Something went wrong");

}

});

});
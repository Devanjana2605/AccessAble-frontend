const supabaseUrl = "https://skerqyzfgultmwixcnzu.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrZXJxeXpmZ3VsdG13aXhjbnp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyNDkyNjgsImV4cCI6MjA4ODgyNTI2OH0.i2KddciOYeSqKKJWppvWsMREnB4uPdSBX9H1DlrbFWU"

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)

document.getElementById("loginForm").addEventListener("submit", async function(e){

e.preventDefault()

const email = document.getElementById("email").value
const password = document.getElementById("password").value

const { data, error } = await supabaseClient.auth.signInWithPassword({
  email: email,
  password: password
})

if(error){
  alert("Login failed: " + error.message)
  return
}

alert("Login successful!")

window.location.href = "role.html"

})
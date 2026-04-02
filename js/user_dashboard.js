document.getElementById("contactForm")
.addEventListener("submit", async function(e){

e.preventDefault()

const name = document.getElementById("cname").value
const phone = document.getElementById("cphone").value
const priority = document.getElementById("priority").value

const { data: { user } } = await supabaseClient.auth.getUser()

const { error } = await supabaseClient
.from("emergency_contacts")
.insert([{
user_id: user.id,
name: name,
phone: phone,
priority: priority
}])

if(error){
alert("Failed to save contact")
return
}

alert("Contact saved")

})
async function saveEmergencyContact(contactName, contactPhone) {
  const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
  if (userError || !user) {
    alert("User not logged in.");
    return;
  }

  const { data, error } = await supabaseClient
    .from("emergency_contacts")
    .insert([{
      user_id: user.id,
      name: contactName,
      phone: contactPhone,
      priority: 1
    }]);

  if (error) {
    console.error("Failed to save contact:", error);
    alert("Failed to save contact");
    return;
  }

  alert("Emergency contact saved successfully!");
}
document.getElementById("emergencyForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("contactName").value;
  const phone = document.getElementById("contactPhone").value;

  saveEmergencyContact(name, phone);
});
import bcrypt from "bcrypt";

const enteredPassword = "123456789";
const storedHash = "$2b$10$znaqAKB..OCmDy.CGFVvtuyHrR3eIWW4I68i/jG0Lp7fJuE4JoyT."; // Example hash

async function testPassword() {
  const isMatch = await bcrypt.compare(enteredPassword, storedHash);
  console.log("Does password match?", isMatch);
}

testPassword();

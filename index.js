function getName(user) {
  if (user.isAdmin) {
    var name = "Admin : " + user.name;
    return name;
  }
  console.log(name)
  return user.name;
}
const res = getName({name: 'Pierre', isAdmin:false})
console.log(res)
// AJAX Request showing employee status
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', '../data/employees.json');
xhr.send();

// AJAX request for meeting room status
var meetSpaces = new XMLHttpRequest();
meetSpaces.onreadystatechange = function() {
  if(meetSpaces.readyState === 4 && meetSpaces.status === 200) {
    var rooms = JSON.parse(meetSpaces.responseText);
    var statusRoomHTML = '<ul class="rooms">';
    for (var j=0; j<rooms.length; j++){
     if (rooms[j].available === true) {
       statusRoomHTML += '<li class="empty">';
     } else {
       statusRoomHTML += '<li class="full">';
     }
     statusRoomHTML += rooms[j].room;
     statusRoomHTML += '</li>';
    }
    statusRoomHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusRoomHTML;
  }
};

meetSpaces.open('GET', '../data/rooms.json');
meetSpaces.send();

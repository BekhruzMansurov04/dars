let dataCollection = JSON.parse(localStorage.getItem("data")) || [];
      let editIndex = null;
      function myTable() {
        let table = document.getElementById("dataTable");
        table.innerHTML = "";
        dataCollection.forEach((item, index) => {
          table.innerHTML += `
            <tr>
              <td>${item.name}</td>
              <td>${item.surname}</td>
              <td>${item.ball}</td>
              <td>
                <button class="edit-btn" onclick="editData(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteData(${index})">Delete</button>
              </td>
            </tr>
          `;
        });
      }
      function addData() {
        let name = document.getElementById("name").value;
        let surname = document.getElementById("surname").value;
        let ball = document.getElementById("ball").value;
        if (name && surname && ball) {
          dataCollection.push({ name, surname, ball });
          localStorage.setItem("data", JSON.stringify(dataCollection));
          myTable();
        }
      }
      function deleteData(index) {
        dataCollection.splice(index, 1);
        localStorage.setItem("data", JSON.stringify(dataCollection));
        myTable();
      }
      function editData(index) {
        editIndex = index;
        document.getElementById("editName").value = dataCollection[index].name;
        document.getElementById("editSurname").value = dataCollection[index].surname;
        document.getElementById("editBall").value = dataCollection[index].ball;
        document.getElementById("editModal").style.display = "flex";
      }
      function saveEdit() {
        dataCollection[editIndex].name = document.getElementById("editName").value;
        dataCollection[editIndex].surname = document.getElementById("editSurname").value;
        dataCollection[editIndex].ball = document.getElementById("editBall").value;
        localStorage.setItem("data", JSON.stringify(dataCollection));
        closeModal();
        myTable();
      }
      function closeModal() {
        document.getElementById("editModal").style.display = "none";
      }
      myTable();
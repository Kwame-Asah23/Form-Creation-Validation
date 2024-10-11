
document.addEventListener('DOMContentLoaded', function () {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        const dataContainer = document.getElementById('api-data')

        try {
            // Fetch the data from the API
            const response = await fetch(apiUrl);

            // Convert the response to JSON format
            const users = await response.json();

            // Clear the existing content (e.g., "Loading user data...")
            dataContainer.innerHTML = "";

            // Create a <ul> element and store it in userList
            const userList = document.createElement('ul');

            // Loop through the users array
            users.forEach(function (user) {
                // Create a <li> element
                const listItem = document.createElement('li');

                // Set the text content of the <li> to the user's name
                listItem.textContent = user.name;

                // Append the <li> to userList
                userList.appendChild(listItem);

                // Append the user list to the data container
                dataContainer.appendChild(userList);
            });

        } catch (error) {
            dataContainer.innerHTML = 'Failed to load user data.'
        }

    }

    fetchUserData();
})


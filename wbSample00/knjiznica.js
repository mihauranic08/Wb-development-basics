// Polni tabelo s podatki iz cobiss.js
const cobissBody = document.getElementById("cobissBody");

cobissData.forEach((book, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${book.descr}</td>
        <td>${book.author}</td>
        <td>${book.totalCount}</td>
    `;
    cobissBody.appendChild(row);
});
// basics Template
function basicshtml ( profile ) {

  return `

    <h3>The Basics</h3>

    <span class="blutext">Name</span> <span class="data">${profile.name}</span><br>
    <span class="blutext">Github URL</span> <span class="data">${profile.html_url}</span><br>
    <span class="blutext">Email</span> <span class="data">${profile.email}</span><br>
    <span class="blutext">Company</span> <span class="data">${profile.company}</span><br>
    <span class="blutext">Website</span> <span class="data">${profile.blog}</span><br>

  `;
}

export default basicshtml;

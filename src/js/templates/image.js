// basics Template
function imagehtml ( profile ) {

  return `
    <img class="center-block profile_pic img-responsive" src="${profile.avatar_url}" />
  `;
}

export default imagehtml;

$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Message__box" data-message-id=${message.id}>
          <div class="Message__info">
            <div class="Message__user-name">
              ${message.user_name}
            </div>
            <div class="Message__date">
              ${message.created_at}
            </div>
          </div>
          <div class="Messages">
            <p class="Message__comment">
              ${message.content}
            </p>
            <img class="Message__img" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="Message__box" data-message-id=${message.id}>
        <div class="Message__info">
          <div class="Message__user-name">
            ${message.user_name}
          </div>
          <div class="Message__date">
            ${message.created_at}
          </div>
        </div>
        <div class="Messages">
          <p class="Message__comment">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Form__contents').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Message').append(html);
      $('.Message').animate({ scrollTop: $('.Message')[0].scrollHeight});
      $('form')[0].reset();
      $('.Form__submitBtn').prop("disabled", false);
    })
    .fail(function(){
      alert("送信に失敗しました");
      $('.Form__submitBtn').prop("disabled", false);
    });
  });
});
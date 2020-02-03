$(function(){
	function copyCode(){
	$("#copy").each(function(){
		$(this).click(function(){
			if (!+[1,])
			{
				clipboardData.setData('Text', $("#input-copy").val());
				alert("复制成功");
			}
			else if (prompt('你使用的是非IE核心浏览器，请按下 Ctrl+C 复制激活码到剪贴板', $("#input-copy").val())) {
			}
		})    
		
	})
  }
  copyCode();
  $("#tabs li a").click(function(){
	  $("#tabs li a").removeClass("current");
	  $(this).addClass("current");
	  var indx = $("#tabs li a").index(this);
	  $(".content").hide();
	  $(".content").eq(indx).show();
  })
});
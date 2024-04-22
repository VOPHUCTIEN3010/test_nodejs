
// $( document ).ready(function() {
//     $('table.table tbody').on('click', 'a.table-link.delete', function(event) {
// 		event.stopPropagation();
// 		tc = $(this);
// 		var cf = confirm("Are you sure!");
// 		if (cf == true) {
// 			url=tc.attr('href');
// 			$.ajax({
// 				url: url,
// 				method: 'post',
// 				success: function( data ) {
// 					if(data)
// 						tc.parent().parent().remove();
// 				},
// 			});
// 		}
// 		return false;
// 	});
// });

$(document).ready(function() {
    // Lắng nghe sự kiện submit trên biểu mẫu có lớp px-1
    $('form.px-1').on('submit', function(event) {
        // Ngăn chặn hành vi mặc định của sự kiện submit
        event.preventDefault();
        
        // Hiển thị hộp thoại xác nhận
        var confirmDelete = confirm("Are you sure you want to delete this user?");
        
        // Nếu người dùng xác nhận xóa
        if (confirmDelete) {
            // Lấy URL từ thuộc tính action của biểu mẫu
            var url = $(this).attr('action');
            
            // Gửi yêu cầu AJAX POST
            $.ajax({
                url: url,
                method: 'POST',
                success: function(data) {
                    // Nếu yêu cầu thành công và dữ liệu phản hồi là true
                    if (data) {
                        // Loại bỏ phần tử biểu mẫu này
                        $(event.target).remove();
                    }
                },
            });
        }
        // Nếu người dùng không xác nhận, biểu mẫu sẽ không được gửi đi
    });
});


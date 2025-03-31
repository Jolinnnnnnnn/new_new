// 等待文档加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮和下拉菜单的DOM元素
    const toggleButton = document.getElementById('toggleButton');
    const dropdownContent = document.getElementById('dropdownContent');

    // 为按钮添加点击事件监听器
    toggleButton.addEventListener('click', function() {
        // 切换下拉菜单的显示状态
        if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
            dropdownContent.style.display = 'block';
        } else {
            dropdownContent.style.display = 'none';
        }
    });
});
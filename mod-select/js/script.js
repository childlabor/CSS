$(function(){
	mod_select();
	
	mod_select_tree();
	
	checkTree();
	
	checkAllLinkage();
});

// ===========================

// select 模拟
function mod_select(){
	$(".option-select li").on("click", function(){	
		var V = $(this).html();
		
		$(this).parents(".box-option").hide()
		.prev(".box-select").children(".input-select").val(V);
		$(".icon-select").removeClass("icon-move");
		$(".input-select").removeClass("input-move");
	});
	
	$(document).on("click", ".box-select", function(event){
		$(this).next(".box-option").toggle();
		$(this).children(".icon-select").toggleClass("icon-move");
		$(".box-select").not(this).children(".icon-select").removeClass("icon-move");
		$(this).children(".input-select").toggleClass("input-move");
		$(".box-select").not(this).children(".input-select").removeClass("input-move");
		$(".box-select").not(this).next(".box-option").hide();
		event.stopPropagation();
	});
	
	// FF下disabled的input无法触发事件的兼容处理
	$(".mod-select .input-select").focus(function(){
		$(this).blur();
	});
	
	$(".box-option").on("click", function(event){
		event.stopPropagation();
	});
	
	$(document).on("click", function(){
		$(".box-option").hide();
		$(".icon-select").removeClass("icon-move");
		$(".input-select").removeClass("input-move");
	});
};


// select-tree模拟
function mod_select_tree(){
	//== 选值
	$(".option-select-tree span").on("click", function(){
		var V = $(this).html();
		$(this).parents(".box-option-tree").hide()
		.prev(".box-select-tree").children(".input-select-tree").val(V);
		$(".icon-select").removeClass("icon-move");
		$(".input-select").removeClass("input-move");
	});
	
	//== 展开树
	$(".tree-drop").on("click", function(){
		if($(this).siblings("ul").length !==0 ) {
			$(this).siblings("ul").slideToggle(150);
			$(this).toggleClass("tree-drop-down");
		}		
	});
	
	//== 下拉
	$(".box-select-tree").on("click", function(event){
		$(this).next(".box-option-tree").toggle();
		$(this).children(".icon-select").toggleClass("icon-move");
		$(".box-select-tree").not(this).children(".icon-select").removeClass("icon-move")
		.next(".box-option-tree").hide();
		$(this).children(".input-select").toggleClass("input-move");
		$(".box-select").not(this).children(".input-select").removeClass("input-move");
		event.stopPropagation();
	});
	$(".box-option-tree").on("click", function(event){
		event.stopPropagation();
	});
	$(document).on("click", function(){
		$(".box-option-tree").hide();
		$(".icon-select").removeClass("icon-move");
		$(".input-select").removeClass("input-move");
	});
	
	// FF下disabled的input无法触发事件，用readonly替换标签中的disabled,readonly不能修改内容但会获得焦点，此为的兼容处理
	$(".mod-select-tree .input-select-tree").focus(function(){
		$(this).blur(); // 不让readonly 的input 获得焦点
	});
};


// 下拉多选控件	
function checkTree(){	
	var treeChecked = $(".checktree .check-d12").find("input[type='checkbox']");
	var treeContent = "";
	
	// 选项全部展开/收起
	$(".m-m").click(function(){
		var $leb = $(".ml-bd").find(".level-box"),
				$td  = $(".tree-drop"),
				sign = false;
		$leb.each(function(){
			if($(this).is(":hidden")){
				sign = true; // 存在未展开的level-box
			}
		});
		if(sign){
			$leb.show();
			$td.addClass("tree-drop-down"); // 图标样式
		} else {
			$leb.hide();
			$td.removeClass("tree-drop-down");
		}
	});
	
	$(".checktree-btn").on("click", function(e){
		// 各种情况下，下拉选框的显示隐藏
		$(this).next().fadeToggle();
		
		$(document).click(function(e){
			$(".checktree").hide();
		});
		e.stopPropagation();
		$(".checktree").on("click", function(e){
			e.stopPropagation();
		});
		
		// 输入框被编辑后匹配checkbox选中状态
		treeContent = $(this).parent().prev().val();
		treeChecked.prop("checked", false);

		var aTreeContent = treeContent.split(",");
			
		for(var i=0,len = aTreeContent.length; i<len; i++) {
			var aTxt = aTreeContent[i];

			if(aTxt != 0) {
				// 一个包含了所有可选checkbox的值的数组
				var aCheckTxt = [];
				
				treeChecked.each(function(){
					var checkVal = $.trim($(this).closest("b").next("span").text());
					
					aCheckTxt.push(checkVal);
					if(aTxt === checkVal){
						$(this).prop("checked", true)
					}
				});
				
				// 被编辑出一个违规名词（不存在），将其归为‘其他’类
				if(aCheckTxt.indexOf(aTxt) == -1) {
					$(this).closest(".checktree-box").find(".treeCheckedOther").prop("checked", true)
				}
			}
		}		
	});
	
	// 提交按钮
	$(".tree-submit").on("click", function(){ 
		$(this).closest(".checktree").hide()
	});
	
	// 固定输入框值的格式；确保在输入框编辑后格式扔能被识别
	$(".checktree-input").change(function(){
		var vTreeContent = $(this).val();
		var lastChartIndex = vTreeContent.length - 1;
		var lastChart = vTreeContent.charAt(lastChartIndex);

		if(lastChart !== ",") {
			$(this).val(vTreeContent + ","); 
		}
		$(this).prop("title", vTreeContent)
	});
		
	// 下拉checkbox选值
	treeChecked.change(function(){
		$(this).each(function(){
			var checkVal = ($.trim($(this).closest("b").next("span").text()) + ",");
				
			if(this.checked) {
				treeContent += checkVal
			}
			if(!this.checked) {
				treeContent = treeContent.replace(checkVal, "");
			}
		});
		$(this).closest(".checktree-box").prev().val(treeContent).prop("title", treeContent)
	});
}


// 多层级联动全选
function checkAllLinkage(){
	var $ps = $(".permission-set"),
    	btn = $("input[type='checkbox']");

	// 全选、全不选
	btn.on("click", function(){
		var $target = $(this).closest("li").find("input[type='checkbox']");
		$target.not("input[disabled='disabled']").prop("checked", this.checked);
	});
		
	// 反选
	$ps.on("click", btn, function(){
	// 子选框全部/部分/没有选中的情况

		// 目标选框的子选框全部未选中;当 n=targetNodeLen-1 时全部选中
		var n = 0; 
		// 将对象转变为数组，方便使用reverse();目的从最底层开始遍历，符合逻辑
		var abtn = jQuery.makeArray(btn).reverse();
		
		$.each(abtn,function(){
			var targetNode = $(this).closest("li").find("input[type='checkbox']");
			var targetNodeLen = targetNode.length;
			
			for(var i=0;i<targetNodeLen;i++){
				if(targetNode[i].checked){
					n+=1; // 统计目标下选框被选中的个数	
				}
			}
			
			// 本身初始处于选中/未选中状态
			var $notLast = $(this).not(".permission-lvlast"),
					$nextLabel = $notLast.next("label");
			
			if(this.checked){
				if(n == targetNodeLen){ // 全选中
					$notLast.prop("checked", true);
					$nextLabel.css("backgroundColor", 'transparent');
				} else if (n == 1){ // 全未选
					$notLast.prop("checked", false);
					$nextLabel.css("backgroundColor", 'transparent');
				} else { // 部分选中
					$nextLabel.css("backgroundColor", '#999');
				}	
			} else {
				if(n == targetNodeLen - 1){
					$notLast.prop("checked", true);
					$nextLabel.css("backgroundColor", 'transparent');
				} else if (n == 0){
					$notLast.prop("checked", false);
					$nextLabel.css("backgroundColor", 'transparent');
				} else {
					$nextLabel.css("backgroundColor", '#999');
					$notLast.prop("checked", true);
				}
			}
			// console.log("选中"+ n + "总："+abtn.length +"id:" + $(this).prop("id"));
			n=0; // 归零
		});
	});
}

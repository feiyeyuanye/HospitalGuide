window.onload = function() {
	var order = document.getElementById("order");
	var theDay = document.getElementById("theDay");
	var url = location.search; //获取url中"?"符后的字串
	var theRequest = new Object();
	var arr = "";
	var sp = "";
	if(url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for(var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
		}
		var Request = new Object();
		Request = theRequest;

		arr = Request['options'];
		//		alert(arr + "跳转之后");
		sp = arr.split(",");
		//				alert(sp);
	}
	if(arr == "") {
		order.disabled = "disabled";
		theDay.disabled = "disabled";
	} else {
		//sp是一个数组
		//sp[0]判断身体部位
		//sp[1]判断身体部位的不适症状
		//sp[2]判断不适症状的答题情况
		if(sp[0] == 1) {
			//头部
			if(sp[1] == 0) {
				//腮腺肿大 
				if(sp[2] == 1) {
					//第一题
					//业务逻辑，显示具体的推荐信息
					alert("头部，腮腺肿大，第一题");
				} else if(sp[2] == 2) {
					//第二题
					alert("头部，腮腺肿大，第二题");
				} else if(sp[2] == 3) {
					//第第三题
					alert("头部，腮腺肿大，第三题");
				}
			} else if(sp[1] == 1) {
				//头晕		
			} else if(sp[1] == 2) {
				//耳痛			
			} else if(sp[1] == 3) {
				//语言障碍			
			} else if(sp[1] == 4) {
				//头痛			
			} else if(sp[1] == 5) {
				//面部疼痛			
			}

		} else if(sp[0] == 2) {
			//颈部
			if(sp[1] == 0) {
				//甲状腺肿大
			} else if(sp[1] == 1) {
				//吞咽苦难	
			} else if(sp[1] == 2) {
				//咽喉疼痛		
			} else if(sp[1] == 3) {
				//颈部疼痛或僵硬			
			}
		} else if(sp[0] == 3) {
			//胸部
			if(sp[1] == 0) {
				//咳痰
			} else if(sp[1] == 1) {
				//肩部疼痛
			} else if(sp[1] == 2) {
				//喘鸣		
			} else if(sp[1] == 3) {
				//咳嗽			
			} else if(sp[1] == 4) {
				//心悸			
			} else if(sp[1] == 5) {
				//咯血			
			} else if(sp[1] == 6) {
				//呼吸困难			
			} else if(sp[1] == 7) {
				//胸痛		
			}
		} else if(sp[0] == 4) {
			//背部
			if(sp[1] == 0) {
				//腰痛
			}
		} else if(sp[0] == 5) {
			//腹部
			if(sp[1] == 0) {
				//食欲异常
			} else if(sp[1] == 1) {
				//呃逆
			} else if(sp[1] == 2) {
				//腹痛		
			} else if(sp[1] == 3) {
				//呕血与黑硬			
			} else if(sp[1] == 4) {
				//腹部肿胀		
			} else if(sp[1] == 5) {
				//腹泻		
			} else if(sp[1] == 6) {
				//胃肠胀气			
			} else if(sp[1] == 7) {
				//反酸	
			} else if(sp[1] == 8) {
				//恶心呕吐	
			}
		} else if(sp[0] == 6) {
			//生殖器
			if(sp[1] == 0) {
				//早泄
			} else if(sp[1] == 1) {
				//阳痿
			}
		} else if(sp[0] == 7) {
			//上肢
			if(sp[1] == 0) {
				//手腕疼痛
			}
		} else if(sp[0] == 8) {
			//下肢
			if(sp[1] == 0) {
				//膝关节疼痛
			} else if(sp[1] == 1) {
				//踝部肿胀
			} else if(sp[1] == 2) {
				//髋关节疼痛	
			}
		} else if(sp[0] == 9) {
			//四肢
			if(sp[1] == 0) {
				//红肿
			} else if(sp[1] == 1) {
				//指甲问题
			}
		} else if(sp[0] == 10) {
			//皮肤
			if(sp[1] == 0) {
				//红斑
			} else if(sp[1] == 1) {
				//皮疹
			} else if(sp[1] == 2) {
				//脱发	
			} else if(sp[1] == 3) {
				//皮肤瘙痒	
			} else if(sp[1] == 4) {
				//皮肤损伤
			} else if(sp[1] == 5) {
				//皮肤变色与色素痣
			} else if(sp[1] == 6) {
				//鳞屑
			} else if(sp[1] == 7) {
				//脓疱疹	
			} else if(sp[1] == 8) {
				//皮肤溃疡	
			} else if(sp[1] == 9) {
				//皮肤肿块
			}
		} else if(sp[0] == 11) {
			//耳眼口鼻
			if(sp[1] == 0) {
				//口臭
			} else if(sp[1] == 1) {
				//嘴唇紫钳
			} else if(sp[1] == 2) {
				//牙齿异常
			} else if(sp[1] == 3) {
				//鼻塞流涕	
			} else if(sp[1] == 4) {
				//眼睛红
			} else if(sp[1] == 5) {
				//眼睛干涩
			} else if(sp[1] == 6) {
				//牙痛
			} else if(sp[1] == 7) {
				//视力下降	
			} else if(sp[1] == 8) {
				//眼球突出	
			} else if(sp[1] == 9) {
				//眼痛
			} else if(sp[1] == 10) {
				//白瞳症
			} else if(sp[1] == 11) {
				//嘴疼
			} else if(sp[1] == 12) {
				//听力下降
			} else if(sp[1] == 13) {
				//耳鸣
			} else if(sp[1] == 14) {
				//眼屎多
			} else if(sp[1] == 15) {
				//流泪
			} else if(sp[1] == 16) {
				//流鼻血
			}
		} else if(sp[0] == 12) {
			//其他
			if(sp[1] == 0) {
				//多汗症
			} else if(sp[1] == 1) {
				//黄疸
			} else if(sp[1] == 2) {
				//水肿
			} else if(sp[1] == 3) {
				//疲劳	
			} else if(sp[1] == 4) {
				//血压高
			} else if(sp[1] == 5) {
				//周身疼痛
			} else if(sp[1] == 6) {
				//低血压
			} else if(sp[1] == 7) {
				//出血倾向	
			} else if(sp[1] == 8) {
				//感觉不适	
			} else if(sp[1] == 9) {
				//消瘦
			} else if(sp[1] == 10) {
				//肥胖
			} else if(sp[1] == 11) {
				//震颤和抽搐
			} else if(sp[1] == 12) {
				//婴儿夜惊
			} else if(sp[1] == 13) {
				//失眠
			} else if(sp[1] == 14) {
				//思维和感觉混乱
			} else if(sp[1] == 15) {
				//不育
			} else if(sp[1] == 16) {
				//焦虑
			} else if(sp[1] == 17) {
				//神经衰弱
			} else if(sp[1] == 18) {
				//抑郁
			} else if(sp[1] == 19) {
				//发热
			} else if(sp[1] == 20) {
				//晕厥
			}
		}
	}
}
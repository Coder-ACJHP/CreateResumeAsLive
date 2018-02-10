		function getTextValAddToCv(from, to) {
            $(from).keyup(function () {
                $(to).html($(from).val());
            });
        }

        $('#picture').change(function () {
            var profilePicture = this.files[0];
            fileReader = new FileReader();
            fileReader.onload = function () {
                $('.photo-img').attr("src", fileReader.result);
            }
            fileReader.readAsDataURL(profilePicture);
        });


        getTextValAddToCv('#name', '.user-name');
        getTextValAddToCv('#job', '.current-job');
        getTextValAddToCv('#email', '.email');
        getTextValAddToCv('#phone', '.phone');
        getTextValAddToCv('#address', '.address');
        getTextValAddToCv('#work-experience', '.work-experience');
        getTextValAddToCv('#about-me', '.about-me');
        getTextValAddToCv('#education', '.education');

        function enableLinks(checkBox, input) {
            if ($(checkBox).is(':checked')) {
                $(input).removeAttr('disabled');

            } else {
                $(input).attr('disabled', 'false');
                $(input).val('');
            }
        }

        $('#second-check').change(function () {
            enableLinks('#second-check', '#addressTwo');
        });
        $('#third-check').change(function () {
            enableLinks('#third-check', '#addressThree');
        });

        var counter = 0;

        function getInputValAppendToCv(from) {
            var address = $(from).val();
            var mainLink = $('.links-div').html();
            counter++;
            var newLink = mainLink + "<p class='link" + counter + "'><a href=" + address + ">" + address + "</a></p>";
            $('.links-div').html(newLink);
        }

        $('#addressOne,#addressTwo,#addressThree').keypress(function (e) {
            if (e.which === 13) {
                getInputValAppendToCv(this);
            }
        });

        function deleteLink(linkId) {
            switch (linkId) {
                case 1:
                    $('.link' + 1).remove();
                    $('#addressOne').val('');
                    break;

                case 2:
                    $('.link' + 2).remove();
                    $('#addressTwo').val('');
                    break;

                case 3:
                    $('.link' + 3).remove();
                    $('#addressThree').val('');
                    break;
            }
        }
        
        var headerNum;
        function showPopOver(params) {
        	headerNum = $(params).html().toUpperCase();
            $(params).each(function(i, obj) {
                $(this).popover({
                    html : true,
                    animation : true,
                    placement : "bottom",
                    title : headerNum,
                    content : function() {
                        return $('#popover-content').html();
                    }
                });
	        });
        } 
        
        function getTextValAppendToCv(from, to) {
            $(from).keypress(function (e) {
            	 if (e.which === 13) {
            		 
            		switch (headerNum) {
					case 'HEADER ONE':
						$(to).append('<p class="headers-text">'+$(from).val()+'<span class="percent"></span></p>');
						break;
					case 'HEADER TWO':
						$('#left-side').append('<section><div class="headers-label" id="second-header-label"></div></section>');
						$('#second-header-label').append('<p class="headers-text">'+$(from).val()+'<span class="percent"></span></p>');
						break;
					case 'HEADER THREE':
						$('#left-side').append('<section><div class="headers-label" id="third-header-label"></div></section>');
						$('#third-header-label').append('<p class="headers-text">'+$(from).val()+'<span class="percent"></span></p>');
						break;
					default:
						break;
					}
            		 
            	 }
            });
        }
        
            $(document).ready(function(){
            	
                $(document).on('focus', '#headerOneText', function(){
                    getTextValAddToCv(this, '#first-header-label');
                });
                
                $(document).on('focus', '#firstSkill', function(){
                    getTextValAppendToCv(this, '.skills-div');
                });
                $(document).on('focus', '#secondSkill', function(){
                    getTextValAppendToCv(this, '.skills-div');
                });
                $(document).on('focus', '#thirdSkill', function(){
                    getTextValAppendToCv(this, '.skills-div');
                });
            });
            
            
            
            
            
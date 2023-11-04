$(document).ready(function () {
	$('.accordion').on('click', '.accordion-control', function (e) {
	  e.preventDefault();
	  $(this).next('.accordion-panel').slideToggle();
	});
	// tab
	$('.tab-list').each(function () {
		const $tabList = $(this);
		const $tabs = $tabList.find('li.active');
		const $link = $tabs.find('a');
		const $panel = $($link.attr('href'));
		
		$tabList.on('click', '.tab-control', function (e) {
		  e.preventDefault();
		  const $clickedTab = $(this);
		  const id = $clickedTab[0].hash;
		  
		  if (id && !$clickedTab.parent().is('.active')) {
			$panel.removeClass('active');
			$tabs.removeClass('active');
			const $newPanel = $(id);
			$newPanel.addClass('active');
			$clickedTab.parent().addClass('active');
			
			$panel = $newPanel;
		  }
		});
	  });
			
	});
  

var bSample = {
	title: 'title',
	desctiption: 'text'
	actions: {
		ok: {bButton: 'OK'},
		cancel: {bButton: 'Cancel'}
	}
};

bSample.template = {

}

bSample.tamplates['__title'] = {
	bLink: {
		url: '%../url%',
		text: '%.%'	
	}
}

function bSample()


bSnippet = {
	title: 'Заголовок сниппета',
	url: 'siteurl.com',
	text: 'Текст сниппета',
	sitelink: [
		{name: 'Посещаемая', url: 'popular.html'},
		{name: 'Авторизация', url: 'auth.html'},
	]
}

bSnippet = {
	title: '%./title%',
	url: '%url%',
	text: '%text%' + ' Читатеть полностью',
	sitelinks: {
		tag: 'p',
		content: '%sitelinks%'
	}
}

bSnippet__sitelinks = {
	bSitelink: {
		title: '%name%',
		link: '%../url/%+%url%'
	}
}
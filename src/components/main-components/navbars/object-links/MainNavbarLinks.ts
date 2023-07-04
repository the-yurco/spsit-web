const MainNavbarLinks = [
	{
		label: 'Edupage',
		path: 'https://spsknm.edupage.org/',
		exact: true
	},
	{
		label: 'O škole',
		// path: '/o-skole',
		exact: 'false',
		expandWrapper: [
			{
				expandContainer: [
					{
						subLabel: 'O škole'
					},
					{
						subLink: 'Kontakt',
						path: '/o-skole/kontakt',
						exact: false
					},
					{
						subLink: 'História školy',
						path: '/o-skole/historia-skoly',
						exact: false
					},
					{
						subLink: 'Misia a vízia školy',
						path: '/o-skole/misia-a-vizia-skoly',
						exact: false
					},
					{
						subLink: 'Vedenie školy',
						path: '/o-skole/vedenie-skoly',
						exact: false
					}
				]
			}
		]
	},
	{
		label: 'Informácie',
		// path: '/informacie',
		exact: 'false',
		expandWrapper: [
			{
				expandContainer: [
					{
						subLabel: 'Administratívne'
					},
					{
						subLink: 'Suplovanie',
						path: 'https://spsknm.edupage.org/substitution/',
						exact: false
					},
					{
						subLink: 'Rozvrch',
						path: 'https://spsknm.edupage.org/timetable/',
						exact: false
					},
					{
						subLink: 'Projekty',
						path: '/informacie/administrativne/projekty',
						exact: false
					},
					{
						subLink: 'Vyhodnocovacie správy',
						path: '/informacie/administrativne/vyhodnocovacie-spravy',
						exact: false
					}
				]
			},
			{
				expandContainer: [
					{
						subLabel: 'Organizačné'
					},
					{
						subLink: 'Hospodárenie s majetkom',
						path: 'https://www.zilinskazupa.sk/sk/samosprava/urad-zsk/odbor-spravy-majetku-investicii/',
						exact: false
					},
					{
						subLink: 'Povinné zverejňovanie',
						path: '/informacie/organizacne/povinne-zverejnovanie',
						exact: false
					},
					{
						subLink: 'Smernica 107/2015',
						path: 'https://www.zilinskazupa.sk/files/odbory/organizacny/2015/smernice/smernica-107_2015-vnutornom-systeme-vybavovania-podnetov-suvisiacich-oznamovani-protispolocenskej-cinnosti.pdf',
						exact: false
					},
					{
						subLink: 'Školský poriadok',
						path: 'http://www.spsknm.sk/stranka/sites/default/files/Skolsky-poriadok_2022.pdf',
						exact: false
					}
				]
			},
			{
				expandContainer: [
					{
						subLabel: 'Zamestnanci'
					},
					{
						subLink: 'Vedenie školy',
						path: '/informacie/zamestnanci/vedenie-skoly',
						exact: false
					},
					{
						subLink: 'Pedagogický personál',
						path: '/informacie/zamestnanci/pedagogicky-personal',
						exact: false
					},
					{
						subLink: 'Administratívny personál',
						path: '/informacie/zamestnanci/administrativny-personal',
						exact: false
					},
					{
						subLink: 'Výchovný poradca',
						path: '/informacie/zamestnanci/vychovny-poradca',
						exact: false
					}
				]
			}
		]
	},
	{
		label: 'Študium',
		// path: '/studium',
		exact: 'false',
		expandWrapper: [
			{
				expandContainer: [
					{
						subLabel: 'Výber študijného programu'
					},
					{
						subLink: 'Študijné odbory',
						path: '/studium/vyber-studijneho-programu',
						exact: false
					},
					{
						subLink: 'Prijímacie konanie',
						path: '/studium/vyber-studijneho-programu/prijimacie-konanie',
						exact: false
					}
				]
			},
			{
				expandContainer: [
					{
						subLabel: 'Študijné informácie'
					},
					{
						subLink: 'Prečo u nás',
						path: '/studium/studijne-informacie/preco-u-nas',
						exact: false
					},
					{
						subLink: 'Pracovné ponuky pre absolventov',
						path: '/studium/studijne-informacie/pracovne-ponuky-pre-absolventov',
						exact: false
					},
					{
						subLink: 'Profesijné zameranie a služby',
						path: '/studium/studijne-informacie/profesijne-zameranie-a-sluzby',
						exact: false
					},
					{
						subLink: 'Kam po skončení SS',
						path: '/studium/studijne-informacie/kam-po-skonceni-ss',
						exact: false
					}
				]
			}
		]
	},
	{
		label: 'Život na škole',
		// path: '/zivot-na-skole',
		exact: 'false',
		expandWrapper: [
			{
				expandContainer: [
					{
						subLabel: 'Život na škole'
					},
					{
						subLink: 'Školská knižnica',
						path: '/zivot-na-skole/skolska-kniznica',
						exact: false
					},
					{
						subLink: 'Školská jedáleň',
						path: '/zivot-na-skole/skolska-jedalen',
						exact: false
					},
					{
						subLink: 'Skolský internát',
						path: 'https://internatspsit.sk/',
						exact: false
					},
					{
						subLink: 'Stravovanie',
						path: '/zivot-na-skole/stravovanie',
						exact: false
					}
				]
			}
		]
	},
	{
		label: 'Dôležité informácie',
		// path: '/dolezite-info',
		exact: 'false',
		expandWrapper: [
			{
				expandContainer: [
					{
						subLabel: 'Dôležité informácie'
					},
					{
						subLink: 'Informácie pre prvákov',
						path: 'http://www.spsknm.sk/stranka/sites/default/files/SPSITKNM.pdf',
						exact: false
					},
					{
						subLink: 'Štipendiá',
						path: '/dolezite-info/stipendia',
						exact: false
					},
					{
						subLink: 'ISIC KARTA',
						path: '/dolezite-info/isic-karta',
						exact: false
					},
					{
						subLink: 'GDPR',
						path: '/dolezite-info/gdpr',
						exact: false
					},
					{
						subLink: 'Žiadosti, tlačivá a vzory',
						path: '/dolezite-info/ziadosti-tlaciva-a-vzory',
						exact: false
					},
					{
						subLink: 'Kontakty 1. pomoci',
						path: '/dolezite-info/kontakty-1.-pomoci',
						exact: false
					},
					{
						subLink: 'Ako funguje maturitná skúška?',
						path: '/dolezite-info/ako-funguje-maturitna-skuska',
						exact: false
					}
				]
			}
		]
	},
	{
		label: 'Fotoalbum',
		path: '/fotoalbum',
		exact: true
	}
];

export default MainNavbarLinks;

/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
	return {
		author: "Rafael Corrêa Gomes",
		quote: "The only way to do great work is to love what you do."
	}
})

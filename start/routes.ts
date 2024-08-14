/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { ReturnQuote } from "../app/ReturnQuote.js";

router.get('/', async () => {
	const quote = ReturnQuote();
	return {
		author: quote.Author,
		quote: quote.Quote,
	}
})

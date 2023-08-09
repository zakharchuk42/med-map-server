import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const UserIdDecorator = createParamDecorator(
	(_: unknown, ctx: ExecutionContext): number | null => {
		const request = ctx.switchToHttp().getRequest()
		const token = request.headers.authorization
		let base64Url = token.split('.')[1]
		let base64 = decodeURIComponent(
			atob(base64Url)
				.split('')
				.map(function (c) {
					return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
				})
				.join(''),
		)
		const user = JSON.parse(base64)

		return user?.id ? Number(user.id) : null
	},
)

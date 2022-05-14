import React from 'react'

const Footer = () => {
  return (
<footer className="container mx-auto py-6">
				<div className="flex justify-between">
					<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© 2022
						<a href="" className="hover:underline ml-0.5">
							Recipes™
						</a>
						. All Rights Reserved.
					</span>
					<div>
						<ul className="flex text-gray-600 dark:text-gray-400">
							<li className="ml-2">
								<a
									href="https://github.com/themesberg/flowbite"
									className="hover:underline "
								>
									<i className="text-2xl fa-brands fa-github-square"></i>
								</a>
							</li>
							<li className="ml-2">
								<a
									href="https://github.com/themesberg/flowbite"
									className="hover:underline "
								>
									<i className="text-2xl fa-solid fa-square-envelope"></i>
								</a>
							</li>
							<li className="ml-2 ">
								<a
									href="https://github.com/themesberg/flowbite"
									className="hover:underline "
								>
									<i className="text-2xl fa-brands fa-linkedin "></i>
								</a>
							</li>
						</ul>
					</div>{" "}
				</div>
			</footer>  )
}

export default Footer
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from '@remix-run/react';
import { courses } from '../data/courses';

const navigation = [
  { name: 'Courses', href: '/all-courses', hasDropdown: true },
  { name: 'About', href: '/about', hasDropdown: false },
  { name: 'Stockist', href: '/stockist', hasDropdown: false }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-300 hover:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-white">
              <Bars3Icon className="block size-6 group-data-open:hidden" />
              <XMarkIcon className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <h1 className="tracking-wider text-4xl font-light text-black">
              <Link to="/">Mato Ceramics</Link>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4 text-sm font-semibold tracking-wider text-gray-900 dark:text-white">
              {navigation.map((item) =>
                item.hasDropdown ? (
                  <Menu key={item.name} as="div" className="relative">
                    <MenuButton className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-300 hover:text-gray-800">
                      {item.name}
                    </MenuButton>
                    <MenuItems className="absolute font-light mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5">
                      <MenuItem>
                        <Link to='/all-courses' className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100">
                          All Courses
                        </Link>
                      </MenuItem>
                      {courses.map((course) => (
                        <MenuItem key={course.slug}>
                          <Link
                            to={`/courses/${course.slug}`}
                            className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                          >
                            {course.title.replace(/-/g, ' ')}
                          </Link>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-300 hover:text-gray-800"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) =>
            item.hasDropdown ? (
              <div key={item.name} className="space-y-1">
                <DisclosureButton className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-300 rounded-md">
                  {item.name}
                </DisclosureButton>
                <div className="ml-4 space-y-1">
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-gray-700 hover:bg-gray-300 rounded-md"
                  >
                    All Courses
                  </Link>
                  {courses.map((course) => (
                    <Link
                      key={course.slug}
                      to={`/courses/${course.slug}`}
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-300 rounded-md"
                    >
                      {course.title.replace(/-/g, ' ')}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-300 rounded-md"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

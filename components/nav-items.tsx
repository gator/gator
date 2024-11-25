'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

export function NavItems() {
  return (
    <NavigationMenu className='hidden md:block mx-auto w-full'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent className='bg-[#005A00]/10'>
            <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3 hidden lg:block'>
                <div className='relative overflow-hidden flex h-full w-full select-none flex-col rounded-md bg-gradient-to-b from-green-600 to-green-800 p-6 no-underline outline-none focus:shadow-md'>
                  <div className='mb-2 text-lg font-medium'>Gator</div>
                  <p className='text-sm leading-tight text-white max-w-32'>
                    Beautiful and simple tools for Healthcare. Speed up your
                    workflow and ease your mind.
                  </p>
                  <Image
                    src='/ali.png'
                    alt='Gator Logo'
                    className='absolute bottom-0 right-0 translate-x-14 translate-y-16'
                    width={150}
                    height={150}
                    priority
                    draggable={false}
                  />
                </div>
              </li>
              <ListItem
                href='https://scribe.gator.sh'
                title='Scribe'
                className='hover:bg-green-500/10'
              >
                Automate clinical documentation with ambiance from encounters.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className='bg-transparent'>
            Company
          </NavigationMenuTrigger>
          <NavigationMenuContent className='bg-[#005A00]/10'>
            <ul className='grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px] '>
              <ListItem
                href='/company'
                title='Company'
                className='hover:bg-green-500/10'
              >
                Company overview, mission, and founding story.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* <NavigationMenuItem>
          <Link href='/research' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Research
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

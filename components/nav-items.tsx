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
import Link from 'next/link'

export function NavItems() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='bg-transparent'>
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <div className='relative overflow-hidden flex h-full w-full select-none flex-col rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'>
                  <div className='mb-2 text-lg font-medium'>Gator</div>
                  <p className='text-sm leading-tight text-muted-foreground max-w-32'>
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
              <ListItem href='https://scribe.gator.sh' title='Scribe'>
                Automate clinical documentation with ambiance from encounters.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className='bg-transparent'>
            Company
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_.75fr]'>
              <div className='row-span-3'>
                <ListItem href='/company' title='Company'>
                  Company overview, mission, and founding story.
                </ListItem>
                <ListItem href='/team' title='Team'>
                  Meet the team.
                </ListItem>
              </div>
              <li className='row-span-3'>
                <div className='relative overflow-hidden flex h-full w-full select-none flex-col rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'>
                  <Image
                    src='/ali.png'
                    alt='Gator Logo'
                    className='absolute bottom-0 translate-y-14 -translate-x-2'
                    width={500}
                    height={500}
                    priority
                    draggable={false}
                  />
                </div>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href='/research' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Research
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
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

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay
} from '@chakra-ui/react'
import React from 'react'
import Sidebar from './Sidebar'

function SideDrawer({isOpen,onClose}) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />

          <DrawerBody>
            <Sidebar/>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SideDrawer
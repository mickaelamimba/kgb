<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ContactsRepository;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\OrderFilter;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *       collectionOperations={"get"={
 *          "normalization_context"={"groups"={"contacts_read"}},
 *     },
 *     "post"
 *     },
 *
 *     itemOperations={
 *         "get",
 *         "put",
 *        "delete",
 *
 *     }
 * )
 * @ApiFilter(OrderFilter::class, properties={"lastName","birthDate"
 * ,"firstName","nationality","missions"})
 * @ORM\Entity(repositoryClass=ContactsRepository::class)
 */
class Contacts
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"contacts_read","missions_read_operation"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"contacts_read","missions_read_operation"})
     */
    private $lastName;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"contacts_read","missions_read_operation"})
     */
    private $firstName;

    /**
     * @ORM\Column(type="date")
     * @Groups({"contacts_read","missions_read_operation"})
     */
    private $birthDate;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"contacts_read","missions_read_operation"})
     */
    private $codeName;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"contacts_read","missions_read_operation"})
     */
    private $nationality;

    /**
     * @ORM\ManyToOne(targetEntity=Missions::class, inversedBy="contactMission")
     * @ORM\JoinColumn(nullable=false)
     *
     *
     */
    private $missions;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getBirthDate(): ?\DateTimeInterface
    {
        return $this->birthDate;
    }

    public function setBirthDate(\DateTimeInterface $birthDate): self
    {
        $this->birthDate = $birthDate;

        return $this;
    }

    public function getCodeName(): ?string
    {
        return $this->codeName;
    }

    public function setCodeName(string $codeName): self
    {
        $this->codeName = $codeName;

        return $this;
    }

    public function getNationality(): ?string
    {
        return $this->nationality;
    }

    public function setNationality(string $nationality): self
    {
        $this->nationality = $nationality;

        return $this;
    }

    public function getMissions(): ?Missions
    {
        return $this->missions;
    }

    public function setMissions(?Missions $missions): self
    {
        $this->missions = $missions;

        return $this;
    }
}

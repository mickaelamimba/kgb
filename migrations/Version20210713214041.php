<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210713214041 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE agents ADD specialties_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE agents ADD CONSTRAINT FK_9596AB6EE3AC3692 FOREIGN KEY (specialties_id) REFERENCES specialties (id)');
        $this->addSql('CREATE INDEX IDX_9596AB6EE3AC3692 ON agents (specialties_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE agents DROP FOREIGN KEY FK_9596AB6EE3AC3692');
        $this->addSql('DROP INDEX IDX_9596AB6EE3AC3692 ON agents');
        $this->addSql('ALTER TABLE agents DROP specialties_id');
    }
}
